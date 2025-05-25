import React from 'react'
import Homepage from './Homepage'
import { useUserStore } from '../../controllers/globalState'


const AdminHomepage = () => {

  const {dashboardData, setDa} = useUserStore();


  return (
    <div>
      
    </div>
  )
}

export default AdminHomepage
