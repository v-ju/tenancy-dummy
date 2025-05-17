
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './pages/Homepage.jsx';
import ListingsForm from './pages/ListingsForm.jsx';

function App() {
  
  return (
    <main className='block mx-auto max-w-[2000px]'>
     <BrowserRouter>
      <Routes>
    
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<LoginPage/>}/>
       
        <Route element={<ProtectedRoute/>}>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Homepage/>}/>
            <Route path='listings' element={<ListingsForm/>} />
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </main>
  )
}

export default App
