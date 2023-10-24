import React from 'react'

const Booking = () => {
  return (
    <div className='max-w-[1180px] h-40 gap-5 mt-5 mx-5 flex flex-col justify-start md:flex-row md:justify-center'>
      <div className='flex flex-col'>
        <label className=' text-lg font-semibold'>Designation</label>
        <select className='lg:w-[300px] md:w-full border rounded-md p-2' name="" id="">
            <option value="">Maldives</option>
            <option value="">Grand Antqua</option>
            <option value="">Key West</option>
            <option value="">Cozumel</option>
        </select>
      </div>

      <div className='flex flex-col lg:max-w-[250px] w-full '>
        <label className=' text-lg font-semibold'>Check-In</label>
        <input className='p-[7px] border rounded-md outline-none' type="date" name="" id="" />
      </div>
      <div className='flex flex-col lg:max-w-[250px] w-full'>
        <label className=' text-lg font-semibold'>Check-Out</label>
        <input className=' p-[7px] border rounded-md outline-none' type="date" name="" id="" />
      </div>

      <div className='flex flex-col'>
        <label className=' text-lg font-semibold'>Search</label>
        <button className=' rounded-md'>Rates & Availabilty</button>
      </div>
    </div>
  )
}

export default Booking
