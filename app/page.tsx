import React from 'react'
import Hero from './HomePageComponents/Hero'
import FlasDeals from './HomePageComponents/FlashDeals/FlasDeals'


const page = () => {
  return (
    <div className='w-full h-full flex flex-col '>
    <Hero/>
    <FlasDeals/>
    </div>
  )
}

export default page