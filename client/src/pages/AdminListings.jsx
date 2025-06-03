import React from 'react'
import { useUserStore } from '../../controllers/globalState'

const AdminListings = () => {
  const user = useUserStore((state) => state.user);  

  return (
    <div>
      Hi, {user?.firstname}
    </div>
  )
}

export default AdminListings
