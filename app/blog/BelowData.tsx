import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import TopLeft from './TopLeft'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})     

const BelowData = () => {
  return (
    <div className='w-full max-w-[1100px] md:bg-orange-400 lg:bg-purple-400 flex items-center justify-center px-3 '>
    {/* //!   Left-Data */}
    <div className='w-full flex flex-col space-y-2'>
      {/* top-1 */}
    <div className='w-full flex items-center justify-center gap-x-3 h-full bg-sky-400 '>
     <TopLeft/>
     <TopRight/>


    {/* <div className=' w-full h-full  max-w-[35%] bg-red-400  '> */}
    {/* <Image height={170} width={170} className='  object-cover'  src="/image-woman-dress.png" alt="blog_main_image" />   */}
  <div className='w-full h-full max-w-[25%] bg-orange-500'>
v
    {/* <Image height={400} width={400} className='bg-[#16092f]  w-full h-full max-h-72 object-top object-cover' src="/Card.png" alt="blog_main_image" />   */}
  </div>
   
    {/* </div> */}

    </div>
    {/* top-1-right */}
    
    </div>
    {/* //! Right-Data */}
     <div className=' hidden sm:block w-[40%] '>
     <div className='flex flex-colitems-center justify-center gap-y-6'>
      
      </div>    
      </div>    
    </div>
  )
}

export default BelowData