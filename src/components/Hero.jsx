import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full h-[90vh]'>
      <img src="https://cdn.wallpapersafari.com/31/34/DsGB7P.jpg" alt="/" className='w-full h-full object-cover' />

      <div className='max-w-[1140px] m-auto'>
        <div className=' w-full h-full absolute top-[40%] md:-[50%] max-w-[600px]'>
            <h2>
                Find Your Special Trip
            </h2>
            <h2 className=' italic'>With Let'sTravell</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem quasi deserunt veniam optio labore fuga animi harum provident nemo necessitatibus ipsam minus, tenetur eius? Tempora ratione officia ipsum aliquid vitae pariatur provident omnis sed?</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
