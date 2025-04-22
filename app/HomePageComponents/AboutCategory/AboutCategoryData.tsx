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
    <div className='w-full h-[350px] max-w-screen-xl grid grid-cols-2 gap-6'>
     <div className='flex items-center justify-center w-full h-full'>
      {/* Text */}
      <div className='w-full h-full flex flex-col items-start justify-start p-3 bg-red-500 text-white'>
     <div className={`${jost.className} text-xl`}>Never-Ending Summer</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-md`}>Throwback Shirts & all-day dressed</div>
     <div style={{fontWeight:200}} className={`${jost.className} text-xs border-b border-white`}>Explore all category</div>
      </div>
      <div className='w-full'>
   <Image height={444} width={444} src="/red_dress.png" alt='red-dress'/>
      </div>
     </div>
    <div className='w-full h-full max-w-screen-xl flex items-center justify-center'>
     <div className='flex items-center justify-center w-full h-full'>
      {/* Text */}
      <div className='w-1/2 h-full flex flex-col items-start justify-start p-3 bg-red-500 text-white'>
     <div className={`${jost.className} text-xl`}>Never-Ending Summer</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-md`}>Throwback Shirts & all-day dressed</div>
     <div style={{fontWeight:200}} className={`${jost.className} text-xs border-b border-white`}>Explore all category</div>
      </div>
      <div className='w-full'>
   <Image height={444} width={444} src="/red_dress.png" alt='red-dress'/>
      </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default AboutCategoryData