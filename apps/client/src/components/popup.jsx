export const Popup = ({msg}) => {
  
  return (
    <div className='fixed bottom-10 right-10 z-50 px-4 py-2 bg-white rounded-md shadow-md border border-amber-300'>
        <span className='text-sm font-bold text-amber-900'>{msg}</span>
    </div>
  )
}

export default Popup
