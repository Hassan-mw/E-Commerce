import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex items-center justify-center'>
     <Image fill src="blog_main_image.png" alt="blog_main_image" />  

    </div>
  )
}

export default page