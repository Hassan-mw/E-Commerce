import Image from 'next/image'
import React from 'react'

const BelowImage = () => {
  return (
    <div className='w-full flex items-center justify-center  max-w-[1100px]  px-3 '>
    <div className='w-full  flex flex-col md:flex-row items-center justify-center'>
    {/* Large_image */}
      <Image height={600} width={600} className='w-full h-full object-contain col-span-3 max-h-[450px]' src="/blog_below_large_image.png" alt="blog_below_large_image" />  
    
    {/* 3_small_iamge */}
    <div className='w-full h-full grid grid-cols-3 md:grid-cols-1 gap-4 max-h-[450px]'>
    <Image height={150} width={150} className='w-full h-full  object-contain max-h-[140px]' src="/blog_below_small_image_1.png" alt=" blog_below_small_image_1" />  
    <Image height={150} width={150} className='w-full  h-full  object-contain max-h-[140px]' src="/blog_below_small_image_2.png" alt=" blog_below_small_image_2" />  
    <Image height={150} width={150} className='w-full  h-full  object-contain max-h-[140px]' src="/blog_below_small_image_3.png" alt=" blog_below_small_image_3" />  
    </div>
     </div>
     </div>
  )
}

export default BelowImage