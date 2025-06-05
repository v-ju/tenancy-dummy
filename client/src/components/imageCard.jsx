import { useRef } from 'react';

const ImageCard = ({ listing }) => {

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -300 : 300, // scroll 300px
      behavior: 'smooth',
    });
  }

  return (
    <div className="border border-gray-200 rounded-3xl  shadow-lg gap-10">
        <div className='relative group'>
          <div ref={scrollRef} className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory rounded-2xl">
            {listing.images.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`${listing.title} ${idx + 1}`}
                className="h-48 w-full object-cover r shrink-0 snap-start"
              />))}
          </div>

          <button
          onClick={() => scroll('left')}
          className=" hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:cursor-pointer group-hover:block "
        >
          <img src='/leftchevron.svg' className="w-3 h-3" />
        </button>

        <button
          onClick={() => scroll('right')}
          className="hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:cursor-pointer group-hover:block"
        >
          <img src='/rightchevron.svg'  className="w-3 h-3" />
        </button>
        </div>
        <div className="p-3">
            <h2 className="text-lg font-medium">{listing.title}</h2>
            <p className="text-sm text-gray-500">{listing.location}</p>
            <p className="text-sm font-medium"> ₹{listing.price} / night</p>
        </div>
    </div>
  );
}

export default ImageCard
 