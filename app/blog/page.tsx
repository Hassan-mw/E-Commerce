import React from 'react'
import Context from './Context'
import Images from './Images'
import BelowData from './BelowData'

const page = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center  '>
     <div className='relative'>
       <Images/>
      <div className='absolute top-20 left-7 sm:left-10 md:left-8 lg:left-15'> <Context/></div> 
      </div>
      <BelowData/>
    </div>
  )
}

export default page