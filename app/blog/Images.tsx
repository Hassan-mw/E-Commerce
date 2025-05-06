import React from 'react'
import Image from 'next/image'

const Images = () => {
  return (
      <div className='w-full flex items-center justify-center '>
      {/* <Image height={1500} width={1500} className='w-screen h-full max-h-[60vh] object-fill hidden lg:block ' src="/bg-left.png" alt="blog_main_image" />   */}
      <Image height={2000} width={1500} className=' object-contain hidden lg:block ' src="/blog_image_lg.png" alt="blog_main_image" />  
      <Image height={1000} width={1000} className='object-fill   hidden sm:block lg:hidden' src="/blog_main_image_sm.png" alt="blog_main_image_sm" />  
      <Image height={1000} width={1000} className='object-fill   sm:hidden' src="/blog_main_image.png" alt="blog_main_image" />  
      </div>
  )
}

export default Images