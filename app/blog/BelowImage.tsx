import Image from 'next/image'
import React from 'react'

const BelowImage = () => {
  return (
    <div className='w-full h-full flex     max-w-[1100px] mx-auto gap-x-3 '>
    
  
    <img className='w-full object-cover  rounded-l-md    max-w-[70%]  ' src="/blog_below_large_image.png" alt='sg' />

    {/* </div> */}
    <div className='w-[30%] flex flex-col items-center justify-between space-y-1'>

<img className=" w-full object-cover h-[32%] rounded-tr-md" src="/blog_below_small_image_2.png" alt='/blog_below_small_image_2' />
<img className=" w-full object-cover h-[32%]" src="/blog_below_small_image_3.png" alt='/blog_below_small_image_3' />
<img className=" w-full object-cover h-[32%] rounded-br-md" src="/blog_below_small_image_1.png" alt='/blog_below_small_image_1' />

</div>






     </div>
  )
}

export default BelowImage