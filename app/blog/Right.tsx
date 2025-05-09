import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
}) 


const Right = () => {
  return (
    <div className=' hidden min-h-full lg:block w-[30%]  '>
    <div className='flex flex-col items-center justify-center '>


  {/* 1 */}
  <div className='w-full flex flex-col space-y-3 bg-[#9DB8C9] rounded-md  relative p-3'>
  <div className='absolute top-3 left-2'><Image height={40} width={40} className='z-5' src="/Quote.png" alt="Quote" /></div>
  <div className={`${jost.className} text-2xl text-white z-10 pl-5`}>Wireless Earbuds</div>
  {/* Text */}
  <div style={{fontWeight:200}} className={` text-xs text-white z-10  pl-5`}>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</div>
   {/* Image-Name */}

   <div className='flex items-center justify-start gap-x-3  pl-5'>
   <div>
    <Image height={40}  width={40} className='rounded-full' src="/blog_person_profile_image.png" alt='person_image'/>
   </div>
   <div className='flex flex-col items-start justify-start '>
  <div  style={{fontWeight:200}}  className={` text-xs text-white`}>Nina Markez</div>
  <div  style={{fontWeight:200}}  className={` text-xs text-white`}>Abc</div>
    
   </div>
   </div>
  </div>

  
  {/* 2 */}
  <div className='w-full flex flex-col space-y-3 bg-[#9DB8C9] rounded-md  relative p-3'>
  <div className='absolute top-3 left-2'><Image height={40} width={40} className='z-5' src="/Quote.png" alt="Quote" /></div>
  <div className={`${jost.className} text-xl text-white z-10 pl-5`}>Wireless Earbuds</div>
  {/* Text */}
  <div style={{fontWeight:200}} className={` text-sm text-white z-10  pl-5`}>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</div>
   {/* Image-Name */}

   <div className='flex items-center justify-start gap-x-3  pl-5'>
   <div>
    <Image height={40}  width={40} className='rounded-full' src="/blog_person_profile_image.png" alt='person_image'/>
   </div>
   <div className='flex flex-col items-start justify-start '>
  <div  style={{fontWeight:200}}  className={` text-sm text-white`}>Nina Markez</div>
  <div  style={{fontWeight:200}}  className={` text-sm text-white`}>Abc</div>
    
   </div>
   </div>
  </div>

  {/* 3 */}
  <div className='w-full flex flex-col space-y-3 bg-[#9DB8C9] rounded-md  relative p-3'>
  <div className='absolute top-3 left-2'><Image height={40} width={40} className='z-5' src="/Quote.png" alt="Quote" /></div>
  <div className={`${jost.className} text-xl text-white z-10 pl-5`}>Wireless Earbuds</div>
  {/* Text */}
  <div style={{fontWeight:200}} className={` text-sm text-white z-10  pl-5`}>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</div>
   {/* Image-Name */}

   <div className='flex items-center justify-start gap-x-3  pl-5'>
   <div>
    <Image height={40}  width={40} className='rounded-full' src="/blog_person_profile_image.png" alt='person_image'/>
   </div>
   <div className='flex flex-col items-start justify-start '>
  <div  style={{fontWeight:200}}  className={` text-sm text-white`}>Nina Markez</div>
  <div  style={{fontWeight:200}}  className={` text-sm text-white`}>Abc</div>
    
   </div>
   </div>
  </div>

  {/* 4 */}
  <div className='w-full flex flex-col space-y-3 bg-[#9DB8C9] rounded-md  relative p-3'>
  <div className='absolute top-3 left-2'><Image height={40} width={40} className='z-5' src="/Quote.png" alt="Quote" /></div>
  <div className={`${jost.className} text-xl text-white z-10 pl-5`}>Wireless Earbuds</div>
  {/* Text */}
  <div style={{fontWeight:200}} className={` text-sm text-white z-10  pl-5`}>"I've been using the XYZ Wireless Earbuds for a few weeks now, and they've completely...</div>
   {/* Image-Name */}

   <div className='flex items-center justify-start gap-x-3  pl-5'>
   <div>
    <Image height={40}  width={40} className='rounded-full' src="/blog_person_profile_image.png" alt='person_image'/>
   </div>
   <div className='flex flex-col items-start justify-start '>
  <div  style={{fontWeight:200}}  className={` text-sm text-white`}>Nina Markez</div>
  <div  style={{fontWeight:200}}  className={` text-sm text-white`}>Abc</div>
    
   </div>
   </div>
  </div>


     </div>    
     </div>   
  )
}

export default Right