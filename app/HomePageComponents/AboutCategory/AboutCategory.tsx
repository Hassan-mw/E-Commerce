import { Jost } from 'next/font/google'
import React from 'react'
import AboutCategoryData from './AboutCategoryData'
import MobileShow from './MobileShow'

const AboutCategory = () => {
  const data=[
    {id:1,title:'Never-Ending Summer',belowTitle:'Throwback Shirts & all-day dressed',image:'red_dress.png',style:'bg-[#BF2E3B]'},
    {id:2,title:'Famous sport brandsNever-Ending Summer',belowTitle:'Get in gym essentialsThrowback Shirts & all-day dressed',image:'blue_dress.png',style:'bg-[#1D5159]'}
  ]
  return (
    <div className='hidden lg:block'>
    <div className='w-full flex items-center justify-center bg-white py-9'>
    <div className='w-full max-w-screen-xl px-10 flex flex-col items-center justify-center space-y-8'>
    
      <AboutCategoryData data={data} /> 
      <MobileShow/>
      {/* <AboutCategoryData/>  */}
    </div>
    </div>
    </div>
  )
}

export default AboutCategory