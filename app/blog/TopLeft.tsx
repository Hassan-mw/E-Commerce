import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
}) 

const TopLeft = () => {
  return (
    <div className='  w-full grid grid-cols-5 col-span-3 '>
    <div className=' flex flex-col items-start justify-start  p-4 space-y-3 w-full bg-pink-500 col-span-3'>
     <div className={`${jost.className} text-[#262626]  text-[10px] lg:text-md`}>Stylish woman in summer outfit isolated posing in fashion trend isolated</div>
     <div className={`${jost.className} text-[#555555] text-[11px] hidden xl:block `}>In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.</div>
     <div className={`${jost.className} text-[#555555] text-[9px] xl:hidden`}>In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle ....</div>
    <div className='w-full flex items-start justify-start' >  <span style={{fontWeight:200}} className={`  gap-x-3 bg-[#4172DC]  p-2  text-[9px]  rounded-xs text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span></div>
     
    </div>



     <Image height={400} width={400} className='bg-white  hidden md:block  w-full h-full max-h-50 object-center object-contain' src="/a-w.png" alt="blog_main_image" />  
     <Image height={400} width={400} className='bg-white hidden sm:block md:hidden  max-h-50 h-full w-full object-center object-contain' src="/blog_2.png" alt="blog_main_image" />  
     <Image height={500} width={500} className='bg-red-800  col-span-2 h-full w-full  sm:hidden   object-center ' src="/a-w.png" alt="blog_main_image" />  
     {/* <div className='w-full h-full bg-green-600'>  */}
 {/* f */}
     {/* </div> */}
     {/* <Image height={200} width={200} className='bg-[#DDD9D8] h-full ' src="/blog_bottom_box_left.png" alt="blog_main_image" />   */}
     </div>
  )
}

export default TopLeft