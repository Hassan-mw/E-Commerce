import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'




const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const AboutCategoryData = () => {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-full  max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 gap-6'>
     {/* //! 1 */}
     <div className='flex max-h-[350px] items-center justify-center w-full h-full rounded-md'>
      {/* Text */}
      <div className='w-[70%] h-full flex flex-col space-y-5 items-start justify-start p-3 bg-[#BF2E3B] text-white'>
     <div className={`${jost.className} text-xl`}>Never-Ending Summer</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-md`}>Throwback Shirts & all-day dressed</div>
     <div style={{fontWeight:200}} className={`${jost.className} text-xs border-b border-white`}>Explore all category</div>
      </div>
      <div className='w-full'>
   <Image height={444} width={444} className='object-cover  max-h-[350px] h-full w-full object-top' src="/red_dress.png" alt='red-dress'/>
      </div>
     </div>
     {/* //! 2 */}
     <div className='flex max-h-[350px] items-center justify-center w-full h-full rounded-md'>
      {/* Text */}
      <div className='w-[70%] h-full flex flex-col space-y-5 items-start justify-start p-3 bg-[#1D5159] text-white'>
     <div className={`${jost.className} text-xl`}>Famous sport brands</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-md`}>Get in gym essentials</div>
     <div style={{fontWeight:200}} className={`${jost.className} text-xs border-b border-white`}>Explore all category</div>
      </div>
      <div className='w-full h-full'>
   <Image height={444} width={444} className='object-cover   h-full w-full ' src="/blue_dress.png" alt='red-dress'/>
      </div>
     </div>
   
    </div>
    </div>
  )
}

export default AboutCategoryData