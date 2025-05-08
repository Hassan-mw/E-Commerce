import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})     

const BelowData = () => {
  return (
    <div className='w-full max-w-[1100px] md:bg-orange-400 lg:bg-purple-400 flex items-center justify-center px-3 '>


    {/* //!   Left-Data */}
    <div className='w-full flex flex-col space-y-2'>
   


    {/* //! Right-Data */}
     <div className=' hidden sm:block w-[30%] bg-amber-600 '>
     <div className='flex flex-colitems-center justify-center gap-y-6'>
      g
      </div>    
      </div>    
    </div>
    </div>
  )
}

export default BelowData