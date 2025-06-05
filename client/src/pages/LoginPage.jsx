import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import Button from '../components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema,loginSchema } from '../../../shared/types/index.js';
import Popup from '../components/popup.jsx';
import { login } from '../../controllers/user.js';
import api from '../../axios.js';
import { useUserStore } from '../../controllers/globalState.js';

const LoginPage = () => {
  const [action, setAction] = useState('Login')
  const [serverMsg,setServerMsg] = useState('')
  const setRole = useUserStore((state) => state.setRole);
  // const role = useUserStore((state) => state.role);
  const currentSchema = useMemo(() => { 
    return (action === 'Login' ? loginSchema : signupSchema
    )},[action])
  

  useEffect(()=>{
    reset();
  },[action])  

  useEffect(()=>{
    if (serverMsg){
      const timer =  setTimeout(() => setServerMsg(''), 3000);
      return () => clearTimeout(timer)
    }  
  },[serverMsg])
  

  const navigate = useNavigate();

  const { register, handleSubmit, formState:{errors},reset} = useForm({resolver: zodResolver(currentSchema),defaultValues:{email:'',password:'',firstName:'',lastName:''}});
  
  const onSubmit = async (data) => {
    try {
      let response;
      if (action === 'Signup'){
        response = await api.post('/user/signup', data);
        setAction('Login')
      } else if(action === 'Login') {
        response = await login(data);
        const role = response.data.role;
        setRole(role)
        const dashboardEndpoint = role === 'admin' ? '/admin/dashboard' : '/user/dashboard'
        setTimeout(() => navigate(dashboardEndpoint),1000)
    }
     
      setServerMsg(response.data.message);
      reset();

    } catch (error) {
      console.error("Full error object:", error);
      let backendMessage = error.response?.data?.message;
      if (Array.isArray(backendMessage)) {
        backendMessage = backendMessage[0]?.message || 'Validation failed.';
      }
      console.log("Backend error:", backendMessage);
      setServerMsg(backendMessage || 'Login failed.');
    }
  };

  return (
    <>
    <div className='min-h-screen flex justify-center items-center bg-gradient-to-b from-pink-100 to-pink-200'>
      <div className='w-full max-w-md flex flex-col justify-center items-center p-10 shadow-lg border border-transparent rounded-lg bg-white animate-fade-in'>
        
          <img src='/biglogo.svg' className='w-45 block m-2'/>
          <h1 className='m-2 font-medium text-xl'>Welcome</h1>
       
        <div className='w-full py-5'>
          <form key={action} onSubmit={handleSubmit(onSubmit)}  >
            {action === 'Login' ? <></>
              :<>
              <div className='py-2 flex justify-center'> 
                <input className='p-2 border rounded-lg mr-2 max-w-1/2' placeholder='Firstname' {...register('firstName')}/>
                <input className='p-2 border rounded-lg  max-w-1/2 ' placeholder='Lastname' {...register('lastName')}/>
              </div>
              <div>
                <p className='text-red-500 text-sm'>{errors.firstName?.message}</p>
                <p className='text-red-500 text-sm'>{errors.lastName?.message}</p>  
              </div>
              </>
            }
            <input type='email' placeholder='Email' {...register('email')} className='block p-2 border rounded-lg my-2 w-full'/>
            <p className='text-red-500 text-sm'>{errors.email?.message}</p> 
            
            <input type='password' placeholder='Password' {...register('password')} className='p-2 border rounded-lg my-2 w-full'/>
            <p className='text-red-500 text-sm'>{errors.password?.message}</p>
            
            <a className='text-sm text-p5 cursor-pointer'>Forgot Password ? </a>
            <div className='flex justify-center items-center py-4'>
              <Button type='submit' title={action}/>
            </div>
            
            {action === 'Login' ? <p className='text-sm'>Don't have an account? <a className='text-p5 cursor-pointer' onClick={() => setAction('Signup')}> Sign up </a></p> 
            : <p className='text-sm'>Already have an account? <a className='text-p5 cursor-pointer' onClick={() => setAction('Login')}> Login </a></p>}
             
          </form>
        </div> 
      </div>
      {serverMsg && <Popup msg={serverMsg}/>}
    </div>
    
    
    </>
  )}

export default LoginPage
