import React from 'react'
import Context from './Context'
import Images from './Images'
import BelowData from './BelowData'
import TextData from './TextData'
import Image from 'next/image'
import BelowImage from './BelowImage'
import Practice from '../practice/page'

const page = () => {
  return (
    <div className='w-full flex  items-center justify-center p-5 '>
    <div className='w-full max-w-screen-xl flex flex-col items-center justify-center  space-y-10 '>
     <div className='relative'>
       <Images/>
      <div className='absolute top-20 left-7 sm:left-10 md:left-8 lg:left-15'> <Context/></div> 
      </div>
      <BelowData/>
      <TextData/>
       <BelowImage/>
       
      
    </div>
    </div>
  )
}

export default page