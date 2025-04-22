import React from 'react'
import Hero from './HomePageComponents/Hero'
import FlasDeals from './HomePageComponents/FlashDeals/FlasDeals'
import TrendingProduct from './HomePageComponents/TrendingProduct/TrendingProduct'
import TopNumberProduct from './HomePageComponents/TopNumbersProduct/TopNumberProduct'


const page = () => {
  return (
    <div className='w-full h-full flex flex-col '>
    <Hero/>
    <FlasDeals/>
    <TrendingProduct/>
    <TopNumberProduct/>
    </div>
  )
}

export default page