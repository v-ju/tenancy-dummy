
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import UserDashboard from './pages/UserDashboard.jsx';
import NotFound from './pages/NotFound.jsx';
import AdminHomepage from './pages/AdminHomepage.jsx';
import Listings from './pages/Listings.jsx';
import UserHomepage from './pages/UserHomepage.jsx';
import AdminListingsForm from './pages/AdminListingsForm.jsx';

function App() {
  
  return (
    <main className='block mx-auto max-w-[2000px]'>
     <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage/>} />
        <Route path='/user/login' element={<LoginPage/>}/>
       
        <Route element={<ProtectedRoute roles={['admin']}/>}>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}>
            <Route index element={<AdminHomepage/>}/>
            <Route path='listing' element={<AdminListingsForm/>} />
            <Route index element={<Listings/>} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute roles={['user']}/>}>
          <Route path='/user/dashboard' element={<UserDashboard/>}>
              <Route index element={<UserHomepage/>}/>
          </Route>
        </Route>
        <Route path="/NotFound" element={<NotFound/>} />
      </Routes>
     </BrowserRouter>
    </main>
  )
}

export default App
