import Image from 'next/image'
import React from 'react'
import HeroPageData from '../HeroPageData/HeroPageData'


const Hero = () => {
  return (
    <div className='w-full h-full  flex items-center justify-center bg-[#f6f6f6]'>
    <div className=' h-[70vh] w-full max-w-screen-xl   bg-blue-300 relative'>
     <Image height={1300} width={1400} className='object-cover lg:object-fill w-full h-full ' src="/Home_page.png" alt='Home-Page-Image'/>
      <div className='absolute left-5 top-10   lg:top-30 '><HeroPageData/></div>
    </div>
    </div>
  )
}

export default Hero