import { Navigate,Outlet } from 'react-router-dom'
import { isTokenExpired } from '../../controllers/token'
import { useUserStore } from '../../controllers/globalState'

const ProtectedRoute = ({roles}) => {
    const token = localStorage.getItem('token')
    const user = useUserStore((state) => state.user);

    if (isTokenExpired(token)){
      localStorage.removeItem('token' );
      return <Navigate to='user/login' replace />;
    }

    if (roles && (!user || !roles.includes(user.role))) {
    return <Navigate to="/NotFound" replace />;
    }

  return <Outlet/>;
  
}

export default ProtectedRoute
