
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  
  return (
    <main className='block mx-auto max-w-[2000px]'>
     <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<LoginPage/>}/>
       
        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
      </Routes>
     </BrowserRouter>
    </main>
  )
}

export default App
