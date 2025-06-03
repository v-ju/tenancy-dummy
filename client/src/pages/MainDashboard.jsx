import { Outlet } from 'react-router-dom'


const MainDashboard = () => {
    
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='top-0 p-2 border-b border-gray-200'>
          <header className="flex justify-between"> 
              <img className='max-h-16 ' src='/biglogo.svg' width={150} height={150}/>
              <img className='mx-2 my-3 p-1 cursor-pointer hover:transition hover:duration-200 hover:shadow-md hover:shadow-gray-500 border-transparent rounded' src='/settings.svg' width={27} height={20}/>
          </header>
        </div>
        <div className="flex-1 overflow-y-auto px-4">
          <Outlet />
        </div>  
    </div>   
     
  )
}

export default MainDashboard
