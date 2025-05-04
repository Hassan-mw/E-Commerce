import React from 'react'
import Context from './Context'
import Images from './Images'

const page = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center bg-green-300 sm:bg-red-500 lg:bg-pink-400'>
     <div className='relative'>
       <Images/>
      <div className='absolute top-20 left-7 sm:left-10 md:left-8 lg:left-15'> <Context/></div> 
       </div>
  
    </div>
  )
}

export default page