import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const NavBar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className=' w-full h-12 flex items-center absolute z-10 justify-between text-white bg-black bg-opacity-50'>
      <div className='hidden sm:flex'>
       <ul className=' flex'>
         <li>Home</li>
         <li>Gallery</li>
         <li>Deatils</li>
         <li>Contact</li>
       </ul>
    </div>

      <div className='flex gap-6 mx-4'>
        <FaFacebookF/>
        <FaTwitter/>
        <FaGooglePlusG/>
        <FaInstagram/>
      </div>

      <div className='mr-4 cursor-pointer z-10 sm:hidden' onClick={() => setNav(!nav)}>
        { nav ? <FaTimes/> : <FaBars />   }
      </div>
      {/* Mobile Menu*/}
      <div className= {nav ? `md:hidden absolute ease-in duration-500 left-0 top-0 overflow-y-hidden w-full h-screen bg-black/90 text-gray-300 px-4 py-7` : `absolute top-0 left-[-100%] duration-500 ease-in`}>
        <ul className=' flex flex-col items-center justify-center'>
          <li className=' text-2xl cursor-pointer'>Home</li>
          <li className=' text-2xl cursor-pointer'>Gallery</li>
          <li className=' text-2xl cursor-pointer'>Details</li>
          <li className=' text-2xl cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
