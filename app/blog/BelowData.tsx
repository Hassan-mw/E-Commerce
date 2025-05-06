import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})     

const BelowData = () => {
  return (
    <div className='w-full max-w-[1100px] md:bg-orange-400 lg:bg-purple-400 flex items-center justify-center '>
    {/* //!   Left-Data */}
    <div className='w-full flex flex-col space-y-2'>
      {/* top-1 */}
    <div className='w-full flex items-center justify-center gap-x-3 '>
      {/* top-1-left */}
    <div className='  w-full grid grid-cols-2 '>
   <div className='w-full flex flex-col items-start justify-start h-full p-4 '>
    <div className={`${jost.className} text-[#262626] text-md lg:text-md`}>Stylish woman in summer outfit isolated posing in fashion trend isolated</div>
    <div className={`${jost.className} text-[#555555] text-[11px]`}>In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.</div>
   <div className=' flex items-center justify-center bg-red-500' >  <span style={{fontWeight:200}} className={`  gap-x-3 bg-[#4172DC]  px-2 py-1 text-[9px]  rounded-sm text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span></div>
    
   </div>
    {/* <Image height={400} width={400} className='bg-white  hidden lg:block  w-full h-full max-h-96 object-center object-contain' src="/a-w.png" alt="blog_main_image" />   */}
    {/* <Image height={400} width={400} className='bg-white hidden md:block lg:hidden  w-full h-full max-h-96 object-center object-contain' src="/blog_2.png" alt="blog_main_image" />   */}
    <Image height={300} width={300} className='bg-white  max-h-96 md:hidden   object-center py-2' src="/a-w.png" alt="blog_main_image" />  
    {/* <Image height={200} width={200} className='bg-[#DDD9D8] h-full ' src="/blog_bottom_box_left.png" alt="blog_main_image" />   */}
    </div>


    {/* <div className=' w-full h-full  max-w-[35%] bg-red-400  '> */}
    {/* <Image height={170} width={170} className='  object-cover'  src="/image-woman-dress.png" alt="blog_main_image" />   */}
  
    {/* <Image height={400} width={400} className='bg-[#afaeb1] w-full h-full max-h-72 object-top object-cover' src="/Card.png" alt="blog_main_image" />   */}
   
    {/* </div> */}

    </div>
    {/* top-1-right */}
    
    </div>
    {/* //! Right-Data */}
     <div className=' hidden sm:block w-[40%] '>
     <div className='flex flex-colitems-center justify-center gap-y-6'>
      
      </div>    
      </div>    
    </div>
  )
}

export default BelowData