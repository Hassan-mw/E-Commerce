import { Jost } from 'next/font/google'
import React from 'react'
import AboutCategoryData from './AboutCategoryData'
import MobileShow from './MobileShow'

const AboutCategory = () => {
  return (
    <div className='hidden lg:block'>
    <div className='w-full flex items-center justify-center bg-white py-9'>
    <div className='w-full max-w-screen-xl px-10 flex flex-col items-center justify-center space-y-8'>
    
      <AboutCategoryData /> 
      <MobileShow/>
      <AboutCategoryData/> 
    </div>
    </div>
    </div>
  )
}

export default AboutCategory