
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute';
import Homepage from './pages/Homepage.jsx';
import ListingsForm from './pages/ListingsForm.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  
  return (
    <main className='block mx-auto max-w-[2000px]'>
     <BrowserRouter>
      <Routes>

        <Route path='/' element={<LandingPage/>} />
        <Route path='/user/login' element={<LoginPage/>}/>
       
        <Route element={<ProtectedRoute roles={['admin']}/>}>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}>
            <Route index element={<Homepage imgpath1='/house.jpg' imgpath2='/plus.svg' title1='No Listings yet...' title2="Let's Get Started !" nav='/admin/dashboard/listings' btntext='Listings'/>}/>
            <Route path='listings' element={<ListingsForm/>} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute roles={['user']}/>}>
          <Route path='/user/dashboard' element={<UserDashboard/>}>
            <Route index element={<Homepage imgpath1='/home.jpg' imgpath2={null} title1='No Bookings yet..' title2='Find your dream home❤️' nav='/admin/dashboard/listings' btntext='View Properties' />}/>
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
