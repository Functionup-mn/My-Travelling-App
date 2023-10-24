import React from 'react'

const Gallery = () => {
  return (
    <div className='max-w-[1140px] px-4 py-28 mt-28 md:py-10 md:mt-2 md:ml-24 w-full flex flex-col items-center justify-center'>
       <h1 className=' text-2xl font-semibold py-4'>Gallery</h1>
       <div className=' grid sm:grid-cols-5 gap-5'>
          <div className=' md:col-span-2 sm:col-span-2 col-span-3 row-span-3'>
            <img className=' h-full w-full object-cover shadow-xl' src="https://c4.wallpaperflare.com/wallpaper/40/928/27/resort-leisure-swimming-pool-estate-wallpaper-preview.jpg" alt="/" />
          </div>
          <div>
            <img className=' h-full w-full object-cover shadow-xl' src="https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1449729.jpg&fm=jpg" alt="/" />
          </div>
          <div>
            <img className=' h-full w-full object-cover shadow-xl' src="https://w0.peakpx.com/wallpaper/322/619/HD-wallpaper-beach-villa-fiji-polynesia-house-bungalow-interior-beautiful-villa-sea-beach-lagoon-exotic-islands-view-ocean-paradise-island-tropical-fiji.jpg" alt="/" />
          </div>
          <div>
            <img className=' h-full w-full object-cover shadow-xl' src="https://cdn.kiwicollection.com/media/property/PR119439/xl/119439-01-Pool_Sunset_Beach_Villa_Baglioni_Resort_Maldives%201-Baglioni%20Maldives.jpg?cb=1634851275" alt="/" />
          </div>
          <div>
            <img className=' h-full w-full object-cover shadow-xl' src="https://wallpaperaccess.com/full/1126761.jpg" alt="/" />
          </div>
          <div>
            <img className=' h-full w-full object-cover shadow-xl' src="https://w0.peakpx.com/wallpaper/47/776/HD-wallpaper-iniala-beach-house-resort-thailand-phuket-beach-pool-palms-beach-house-iniala-summer-house.jpg" alt="/" />
          </div>
          <div>
            <img className=' h-full w-full object-cover shadow-xl' src="https://wallpapershome.com/images/wallpapers/thailand-2560x1440-5k-4k-wallpaper-8k-beach-shore-boat-rocks-travel-6487.jpg" alt="" />
          </div>
       </div>
    </div>
  )
}

export default Gallery
