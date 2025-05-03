import Image from 'next/image'
import React from 'react'

const blog = () => {
  return (
    <div className='w-full '>
     <Image fill src='/blog_main_image.jpeg' alt="blog_iamge" />
    </div>
  )
}

export default blog