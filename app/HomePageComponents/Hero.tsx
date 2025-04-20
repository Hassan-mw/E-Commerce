import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full'>
    <div className='relative'>
     <Image fill className='object-cover h-full w-full' src="/Home_page.png" alt='Home-Page-Image'/>

    </div>
    </div>
  )
}

export default Hero