import HeaderDashboard from './HeaderDashboard.jsx';
import SidebarDashboard from './SidebarDashboard.jsx';

const AdminDashboard = () => {
  
  return <>
    <div className='flex h-screen w-full'>
      <SidebarDashboard/>
      <div className={`flex-1`}> 
        <HeaderDashboard/>
      </div>
    </div>
    
  </>
}

export default AdminDashboard
