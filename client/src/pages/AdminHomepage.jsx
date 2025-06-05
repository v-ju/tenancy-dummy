import { useEffect, useState } from 'react'
import { useListingsStore, useUserStore } from '../../controllers/globalState'
import Homepage from './Homepage.jsx'
import Listings from './Listings.jsx'
import { fetchListings } from '../../controllers/user.js'

const AdminHomepage = () => {
  const role = useUserStore((state) => state.role)
  const setListings = useListingsStore((state) => state.setListings);
  const [checkListings, setCheckListings] = useState(null)
  
  const isListingsPage = location.pathname.endsWith('/listings');
  useEffect(()=>{
    fetchListings(role,setListings, setCheckListings);
  },[])
  
  return <>
    {!isListingsPage && checkListings ? <Listings/> 
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
