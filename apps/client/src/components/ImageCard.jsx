import { useRef, useState } from 'react';

const ImageCard = ({ listing , children}) => {
  

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300, // scroll 300px
      behavior: 'smooth',
    });
  }

  const [expanded, setExpanded] = useState(false);
  const description = listing.description;
  
  const handleText = () => {
    if (description.length <= 110){
      return <p className='text-sm text-gray-600'>{description}</p>
    }
    if (expanded){
      return <p className='text-sm text-gray-600'>{description}{" "}
        <span className='text-sm text-blue-400 cursor-pointer' onClick={() => setExpanded(false)}>
          see less
        </span>
      </p>
    } else{
      return <p className='text-sm text-gray-600'>{description.substring(0, 110)}...{' '}
        <span className='text-sm text-blue-400 cursor-pointer' onClick={() => setExpanded(true)}>
          see more
        </span>
      </p>
    }
  }

  return (
    <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-lg gap-10">
        <div className='relative group'>
          <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory rounded-2xl">
            {listing.images.length > 0 ? listing.images.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`${listing.title} ${idx + 1}`}
                className="h-48 w-full object-cover shrink-0 snap-start"
              />)): <img src='/noimage.png' className="h-48 w-full  shrink-0 snap-start"/>}
          </div>

          <button
            onClick={() => scroll('left')}
            className=" hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:cursor-pointer group-hover:block ">
            <img src='/leftchevron.svg' className="w-3 h-3" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:cursor-pointer group-hover:block"
            >
            <img src='/rightchevron.svg'  className="w-3 h-3" />
          </button>
        </div>
        <div className="p-3 flex justify-center ">
            <div className='flex-1'>
              <h2 className="text-lg font-medium">{listing.title}</h2>
              <p className="text-sm text-gray-500">{listing.location}</p>
              {handleText()}
              <p className="text-sm font-medium"> ₹{listing.price} / month</p>
            </div>
            <div>
              {children}
            </div>
        </div>
    </div>
  );
}

export default ImageCard
 