import Image from 'next/image'
import React from 'react'
import HeroPageData from '../HeroPageData/HeroPageData'

const Hero = () => {
  return (
    <div className='w-full h-full'>
    <div className='absolute w-full h-full'>
     <Image fill className='object-cover h-full w-full' src="/Home_page.png" alt='Home-Page-Image'/>
      <div className='fixed top-[40%] left-4'><HeroPageData/></div>
    </div>
    </div>
  )
}

export default Hero