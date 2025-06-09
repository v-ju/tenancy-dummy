import { useState } from 'react';
import { useUserStore,useListingsStore } from '../../controllers/globalState'
import { getGreetingMsg } from '../../controllers/user';
import ImageCard from '../components/ImageCard';
import { useNavigate } from 'react-router-dom';
const LISTING_SIZE = 6;


const Listings = () => {
  const user = useUserStore((state) => state.user); 
  const role = useUserStore((state) => state.role)
  const listings = useListingsStore((state) => state.listings)
  const publicListings = useListingsStore((state) => state.publicListings)
  const totalListings = listings.length;
  const noOfPages = Math.ceil(totalListings / LISTING_SIZE);
  
  const [currentPage, setCurrentPage] = useState(0);
  const start = (currentPage * LISTING_SIZE );
  const end = start + LISTING_SIZE;

  const handlePage = (n) => {
    setCurrentPage(n);
  }

  const navigate = useNavigate();

  return (
    <div className='flex flex-col h-screen  '>
      <div className='flex my-8 '>
        <div className='tracking-widest text-2xl font-bold text-transparent bg-gradient-to-br from-[#AE075A] md:via-[#f72585] to-[#59072F] bg-clip-text flex-1 '>
        {getGreetingMsg() + user?.firstName}
        </div>
        {role === 'admin' && <div>
          <button className='flex bg-[#1663C8] text-white border rounded-lg px-3 py-2 cursor-pointer hover:bg-[#0070D7]' onClick={() => navigate('/admin/dashboard/listing')}>
            Add Listing
          </button>
        </div>}
      </div>
      <div className='grid xl:grid-cols-3 lg:grid-cols-2 max-lg:w-110 max-md:w-100 max-lg:flex max-lg:flex-col max-lg:mx-auto  gap-7 mb-4'>
        { role === 'user' ? publicListings.slice(start, end).map(listing => (
          <ImageCard key={listing._id} listing={listing}>
            <button className='flex bg-[#1663C8] text-white border items-center justify-center rounded-lg px-3 py-2 cursor-pointer hover:bg-[#0070D7]' onClick={() => navigate('/admin/dashboard/listing')}>
              Book
            </button>
          </ImageCard>))
          :listings.slice(start,end).map(listing => (
            <ImageCard key={listing._id} listing={listing}>
              <button className='flex bg-[#1663C8] text-white border  rounded-lg px-2 py-1 cursor-pointer hover:bg-[#0070D7]' onClick={() => navigate('/admin/dashboard/listing')}>
                Edit
              </button>
            </ImageCard>
          ))
        }
      </div>
      <div className='mb-4 mt-auto flex justify-center '>
        {[...Array(noOfPages).keys()].map(n => (<button key={n} className={`w-10 h-10 flex items-center cursor-pointer border justify-center m-1 rounded-lg ${n === currentPage ? 'border-pink-600': 'border-gray-400'}`} onClick={() => handlePage(n)}>{n+1}</button>))} 
      </div>
    </div>
  )
}

export default Listings
