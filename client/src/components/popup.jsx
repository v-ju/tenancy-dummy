export const Popup = ({msg}) => {
  
  return (
    <div className='fixed bottom-[100px] right-[100px] border-transparent bg-white px-2 py-1 rounded-md'>
        <span className='text-sm font-bold text-amber-900'>{msg}</span>
    </div>
  )
}

export default Popup
