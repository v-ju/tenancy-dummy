import { useEffect, useState } from 'react'
import { useListingsStore, useUserStore } from '../../controllers/globalState'
import Homepage from './Homepage.jsx'
import Listings from './Listings.jsx'
import { fetchListings } from '../../controllers/user.js'
import Spinner from '../components/Spinner.jsx'

const AdminHomepage = () => {
  const role = useUserStore((state) => state.role)
  const setListings = useListingsStore((state) => state.setListings);
  const [checkListings, setCheckListings] = useState(null)
  const [loading,setLoading] = useState(true)
  const isListingsPage = location.pathname.endsWith('/listings');
  useEffect(()=>{
    const loadPage = async() => {
      try{
        setLoading(true)
        await fetchListings(role,setListings, setCheckListings);
        
      }catch(err){
        console.log('Error fetching Page', err)
      }finally{
        setLoading(false)
      }
    }
    loadPage();
  },[])

  if (loading) {
    return <Spinner />
  }
  
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
