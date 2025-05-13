import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import AboutUsData from './AboutUsData'
import AboutUsLogin from './AboutUsLogin'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page = () => {
  return (
  <div className='w-full flex items-center justify-center '>
     <div className='max-w-[850px] lg:max-w-[1200px] w-full flex flex-col items-center justify-center p-5 space-y-10'>
       {/* Current Page showing */}
      <div className='w-full flex    pb-4 items-start justify-start space-x-3 '>
       <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#555555]`}>Homepage <MdKeyboardArrowRight size={20} /></span>
       <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>About us</span>
      </div>
   
      {/* Data */}
      <AboutUsData/>
      <AboutUsLogin/>  
    </div>
    </div>
  )
}

export default page