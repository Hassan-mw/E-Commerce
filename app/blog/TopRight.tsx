import Image from 'next/image'
import React from 'react'

const TopRight = () => {
  return (
    
  <div className='w-full h-full bg-orange-500 col-span-1'>
  {/* v */}
      {/* <Image height={500} width={500} className='w-full h-full object-fit' src="/Card.png" alt="blog_main_image" />   */}
      <Image height={500} width={500} className='w-full h-full object-fit ' src="/top_right_image.png" alt="blog_main_image" />  
    </div>
     
 
  )
}

export default TopRight