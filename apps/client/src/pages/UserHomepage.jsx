import { useListingsStore,useUserStore } from '../../controllers/globalState'
import { useState,useEffect } from 'react';
import { fetchListings } from '../../controllers/user'
import Listings from './Listings';
import Spinner from '../components/Spinner';

const UserHomepage = () => {
    const role = useUserStore((state) => state.role);
    const setPublicListings = useListingsStore((state) => state.setPublicListings);
    const [checkListings, setCheckListings] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const loadPage = async() => {
          try{
            setLoading(true)
            await fetchListings(role, setPublicListings, setCheckListings);
          }catch(err){
            console.log('Err in fetching data', err)
          }finally{
            setLoading(false)
          }
        }
      loadPage();
    },[])

    if (loading){
      return <Spinner/>
    }

  return (
    <div>
      {checkListings ? <Listings/> : <div className='flex h-screen justify-around items-start mt-40 text-3xl font-bold'>No Properties yet...</div>}
    </div>
  )
}

export default UserHomepage
