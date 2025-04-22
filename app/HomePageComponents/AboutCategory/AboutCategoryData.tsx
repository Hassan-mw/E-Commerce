import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'




const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const AboutCategoryData = ({data}:) => {
  return (
    <div className=' w-full flex items-center justify-center'>
    <div className='w-full  max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 gap-6'>
    {data.map((data,index)=>
   
     <div key={data.id} className='flex max-h-[350px] items-center justify-center w-full h-full rounded-md'>
   
      <div className={`w-[70%] h-full flex flex-col space-y-6 sm:space-y-7 pb-12 items-start justify-between p-3 ${data.style} text-white`}>
     <div className='flex flex-col items-start justify-start space-y-3 lg:space-y-9'>

     <div className={`${jost.className} text-xl sm:text-sm md:text-xl lg:text-3xl`}>{data.title}</div>
     <div style={{fontWeight:300}} className={`${jost.className} text-md sm:text-xs lg:text-lg`}>{data.belowTitle}</div>
     </div>
     <div style={{fontWeight:200}} className={`${jost.className} text-xs  sm:text-[10px] md:text-md lg:text-lg border-b border-white`}>Explore all category</div>
      </div>
      <div className='w-full h-full lg:w-[70%]'>
   <Image height={666} width={666} className='object-cover  max-h-[350px] h-full w-full object-top' src={`/${data.image}`} alt='red-dress'/>
      </div>
     </div>
      )}
     
    </div>
    </div>
  )
}

export default AboutCategoryData