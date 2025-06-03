import React, { useEffect, useState } from 'react'
import { useListingsStore } from '../../controllers/globalState'
import Homepage from './Homepage.jsx'
import AdminListings from './AdminListings.jsx'
import { fetchListings } from '../../controllers/user.js'

const AdminHomepage = () => {

  const setListings = useListingsStore((state) => state.setListings);
  const [checkListings, setCheckListings] = useState(null)
  const isListingsPage = location.pathname.endsWith('/listings');
  useEffect(()=>{
    fetchListings(setListings, setCheckListings);
  },[])
  
  return <>
    {!isListingsPage && checkListings ? <AdminListings/> 
    : <Homepage
     imgpath1='/house.jpg' 
     imgpath2='/plus.svg' 
     title1='No Listings yet...' 
     title2="Let's Get Started !" 
     nav='/admin/dashboard/listing' 
     btntext='Listings'
     /> }
  </>
}

export default AdminHomepage
