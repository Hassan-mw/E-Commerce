import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full bg-[#9a84b7]  flex items-center justify-center'>
     <Image height={1000} width={1000} className='object-fill w-full max-w-[1000px]' src="/blog_image_lg.png" alt="blog_main_image" />  
     {/* <Image height={1000} width={1000} className='object-fill  max-h-[500px]' src="/blog_main_image.png" alt="blog_main_image" />   */}

    </div>
  )
}

export default page