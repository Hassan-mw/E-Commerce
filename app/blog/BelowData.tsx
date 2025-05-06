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
    <div className='w-full max-w-screen-xl bg-green-400 flex items-center justify-center '>
    {/* //!   Left-Data */}
    <div className='w-full flex flex-col space-y-2'>
      {/* top-1 */}
    <div className='w-full grid grid-cols-2 gap-x-3'>
    <div className='flex items-center justify-center'>
   <div className='flex items-start justify-start '>
    <div className={`${jost.className} text-[#262626] text-xl`}>Stylish woman in summer outfit isolated posing in fashion trend isolated</div>
    <div className={`${jost.className} text-[#555555] text-xs`}>In this captivating scene, a stylish woman stands confidently against a pristine backdrop, capturing the essence of summer's allure. Bathed in the gentle sunlight, she emanates an air of effortless chic. Her outfit is a harmonious blend of contemporary trends and timeless elegance, perfectly attuned to the vibrant season.</div>
    <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    
   </div>
    <Image height={200} width={200} className='' src="/blog_bottom_box_left.png" alt="blog_main_image" />  
    </div>

    </div>

    </div>
    {/* //! Right-Data */}
     <div className='flex flex-col w-[30%] items-center justify-center gap-y-6'>
      
      </div>    
    </div>
  )
}

export default BelowData