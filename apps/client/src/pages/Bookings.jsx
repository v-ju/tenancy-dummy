import { useUserStore,useListingsStore } from '../../controllers/globalState'
import { getGreetingMsg } from '../../controllers/user';
import ImageCard from '../components/ImageCard';
import { useNavigate } from 'react-router-dom';


const Bookings = () => {

  const user = useUserStore((state) => state.user); 
  const publicListings = useListingsStore((state) => state.publicListings)
  const navigate = useNavigate();
  return (
    <div className=''>
      <div className='flex my-8 '>
        <div className='tracking-widest text-2xl font-bold text-transparent bg-gradient-to-br from-[#AE075A] md:via-[#f72585] to-[#59072F] bg-clip-text flex-1 '>
        {getGreetingMsg() + user?.firstName}
        </div>
      </div>
      <div className='grid grid-cols-3 gap-7'>
        { publicListings.map(listing => (
          <ImageCard key={listing._id} listing={listing}>
             <button className='flex bg-[#1663C8] text-white border rounded-lg px-3 py-2 cursor-pointer hover:bg-[#0070D7]' onClick={() => navigate('/admin/dashboard/listing')}>
             Book
            </button>
            </ImageCard>))}
      </div>
    </div>
  )
}

export default Bookings
