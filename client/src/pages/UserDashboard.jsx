import SidebarDashboard from './SidebarDashboard.jsx'
import MainDashboard from './MainDashboard.jsx'

const UserDashboard = () => {
  return (
    <div className='flex h-screen w-full'>
      <SidebarDashboard/>
      <div className={`flex-1 overflow-y-auto`}> 
        <MainDashboard/>
      </div>
    </div>
  )
}

export default UserDashboard
