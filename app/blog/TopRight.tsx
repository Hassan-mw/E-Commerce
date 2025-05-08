import Image from 'next/image'
import React from 'react'

const TopRight = () => {
  return (
    
  <div className='w-full h-full  bg-orange-500'>
  {/* v */}
      <Image height={400} width={400} className='bg-[#16092f]  w-full h-full max-h-72 object-top object-cover' src="/Card.png" alt="blog_main_image" />  
    </div>
     
 
  )
}

export default TopRight