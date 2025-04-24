import React from 'react'
import Hero from './HomePageComponents/Hero'
import FlasDeals from './HomePageComponents/FlashDeals/FlasDeals'
import TrendingProduct from './HomePageComponents/TrendingProduct/TrendingProduct'
import TopNumberProduct from './HomePageComponents/TopNumbersProduct/TopNumberProduct'
import AboutCategory from './HomePageComponents/AboutCategory/AboutCategory'
import HoverData from './HomePageComponents/HoverData/HoverData'


const page = () => {
  return (
    <div className='w-full h-full flex flex-col '>
    <HoverData/>
    <Hero/>
    <FlasDeals/>
    <TrendingProduct/>
    <TopNumberProduct/>
    <AboutCategory/>
  
    </div>
  )
}

export default page