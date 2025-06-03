
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './pages/Homepage.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import NotFound from './pages/NotFound.jsx';
import AdminHomepage from './pages/AdminHomepage.jsx';
import AdminListingsForm from './pages/AdminListingsForm.jsx';
import AdminListings from './pages/AdminListings.jsx';

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
            <Route index element={<AdminListings/>} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute roles={['user']}/>}>
          <Route path='/user/dashboard' element={<UserDashboard/>}>
            <Route index element={<Homepage imgpath1='/home.jpg' imgpath2={null} title1='No Bookings yet..' title2='Find your dream home❤️' nav='/user/dashboard/listings' btntext='View Properties' />}/>
            {/* <Route path='booking' element={<BookingsForm/>} /> */}
          </Route>
        </Route>
        <Route path="/NotFound" element={<NotFound/>} />
      </Routes>
     </BrowserRouter>
    </main>
  )
}

export default App
