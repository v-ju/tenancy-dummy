import { Navigate,Outlet } from 'react-router-dom'
import { isTokenExpired } from '../../controllers/token'

const ProtectedRoute = () => {
    const token = localStorage.getItem('token')
    if (isTokenExpired(token)){
      localStorage.removeItem('token' );
      return <Navigate to='/login' replace />;
    }
  return <Outlet/>;
  
}

export default ProtectedRoute
