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
    <div className='  w-full grid grid-cols-5 sm:grid-cols-6 col-span-3' >
    <div className=' flex flex-col items-start justify-start  p-4 space-y-3  col-span-3 md:space-y-5 sm:col-span-4 md:col-span-3 lg:space-y-6 w-full max-w-52 sm:max-w-full  '>
     <div className={`${jost.className} text-[#262626]  text-[10px] sm:text-sm  xl:text-lg`}>Stylish woman in summer outfit isolated posing in fashion trend isolated</div>
     <div style={{fontWeight:200}} className={` text-[#555555] text-[11px]  hidden lg:block lg:text-md   `}>In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.</div>
     <div className={` text-[#555555] text-[9px]  sm:text-sm   lg:hidden `}>In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.</div>
   
    <div className='w-full flex items-start justify-start hover:cursor-pointer ' >  <span style={{fontWeight:200}} className={`  gap-x-3 bg-[#4172DC] hover:bg-blue-600 duration-300 md:px-3 lg:px-5 p-2  text-[9px]  rounded-xs text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span></div>
     
    </div>



     <Image height={400} width={400} className='bg-white  hidden md:block md:col-span-3 h-full w-full object-cover   object-center ' src="/a-w.png" alt="blog_main_image" />  
     <Image height={500} width={500} className='bg-white hidden sm:block md:hidden col-span-2 h-full w-full    object-center ' src="/blog_2.png" alt="blog_main_image" />  
     <Image height={500} width={500} className='bg-red-400 sm:hidden object-cover col-span-2 h-full w-full    object-center  ' src="/a-w.png" alt="blog_main_image" />  

     </div>
  )
}

export default TopLeft