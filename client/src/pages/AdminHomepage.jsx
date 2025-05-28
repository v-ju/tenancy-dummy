import React, { useEffect, useState } from 'react'
import Homepage from './Homepage'
import { useUserStore } from '../../controllers/globalState'
import Homepage from './Homepage.jsx'
import AdminListings from './AdminListings.jsx'


const AdminHomepage = () => {

  const [listing, setListing] = useState([])

  useEffect(()=>{
    const fetchListings = async() => {const {message,listings , hasListings} = await (api.get('/admin/listings')).data;}
    
  },[])

  return (
    <div>
      
    </div>
  )
}

export default AdminHomepage
