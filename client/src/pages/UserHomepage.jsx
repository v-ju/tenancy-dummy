import { useListingsStore,useUserStore } from '../../controllers/globalState'
import { useState,useEffect } from 'react';
import { fetchListings } from '../../controllers/user'
import Listings from './Listings';

const UserHomepage = () => {
    const role = useUserStore((state) => state.role);
    const setPublicListings = useListingsStore((state) => state.setPublicListings);
    const [checkListings, setCheckListings] = useState(null);
    
    useEffect(()=>{
        fetchListings(role, setPublicListings, setCheckListings);
        
    },[])

  return (
    <div>
      {checkListings ? <Listings/> : "No Properties yet..!"}
    </div>
  )
}

export default UserHomepage
