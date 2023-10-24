import React from 'react'
import { AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import { BsChatSquareDots } from 'react-icons/bs'

const TopBar = () => {
  return (
    <div className='w-full h-14 flex items-center justify-between bg-cyan-200'>
      <div className=' flex items-center ml-4'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h2 className=' text-xl'>LET' STRAVELL</h2>
      </div>
      
      <div className=' flex gap-14 items-center mr-4'>
      <div className=' hidden items-center gap-2 md:flex'>
        <AiOutlineClockCircle size={30} className='text-[var(--primary-dark)]'/>
        <p className='text-sm text-gray-700'>9AM - 5PM</p>
      </div>

      <div className=' hidden items-center gap-2 md:flex'>
        <AiFillPhone size={30} className='text-[var(--primary-dark)]'/>
        <p className='text-sm text-gray-700'>1-888-817-1234</p>
      </div>
      <button className='text-sm sm:text-base'>Get a Free Quote</button>
     </div>
    </div>
  )
}

export default TopBar
