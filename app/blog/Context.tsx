import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaClock } from 'react-icons/fa6'
import { IoHeartSharp } from 'react-icons/io5'
import { RiMessage3Fill } from 'react-icons/ri'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Context = () => {
  return (
    <div className='flex  items-start  justify-start gap-x-3 sm:gap-x-9 md:gap-x-4 text-white'>

     {/*Bookmark-Image  */}
     <Image height={15} width={15}  className='  pt-2' src="/Bookmark.png"alt="Bookmark"/>

     {/* Main text */}
    <div className='flex flex-col items-start justify-start space-y-5 xl:space-y-8 text-white'>
     <div className='text-2xl sm:text-3xl  md:text-5xl font-bold '>Stunning barefooted <br/> woman of 2023</div>
     <div style={{fontWeight:200}} className='text-lg md:text-xl lg:text-2xl font-bold  max-w-60 sm:max-w-80 md:max-w-96 lg:max-w-[500px] xl:max-w-[650px] '>In the heart of a chic urban studio, the atmosphere buzzed with excitement as a trendy fur coat took center stage during a vibrant photoshoot.</div>
    
    
    {/* 3-Icons */}
     <div className='flex items-center justify-center space-x-4 lg:gap-x-7 '>
     <div className='flex items-center justify-center gap-x-2 text-xs sm:text-md' ><span><FaClock /></span> <span>20 July 2020</span></div>   
     <div className='flex items-center justify-center gap-x-2 text-xs sm:text-md'><span><IoHeartSharp /></span> <span>830</span></div>   
     <div className='flex items-center justify-center gap-x-2 text-xs sm:text-md '><span><RiMessage3Fill /></span> <span>19</span></div>   
     </div>
    
    {/* Button */}
    <div className='border rounded-md flex items-center justify-center gap-x-2 px-3 py-2'>
    <div>READ MORE</div>
    <span><FaArrowRight /></span>
    </div>

   {/* Text */}
   <div className='hidden xl:block pt-8 2xl:pt-24'>
   <div className=' grid  grid-cols-3   xl:max-w-[620px] gap-x-4 border-t text-white'>
   {/* 1 */}
   <div className='flex flex-col items-start justify-start space-y-3 '>
    <div style={{fontWeight:500}} className={`${jost.className} font-bold text-md  pt-4`}>Elevating Everyday Style</div>
    <div className='text-xs'>Explore the art of blending high-end and budget-friendly fashion items to create stylish and versatile outfits.</div>
   </div>

   {/* 2 */}
   <div className={`${jost.className} flex flex-col   items-start justify-start space-y-3`}>
    <div style={{fontWeight:500}} className='text-md  pt-4'>Sustainable Fashion</div>
    <div className='text-xs'>Discuss the growing importance of sustainable fashion and its impact on the environment.</div>
   </div>

   {/* 3 */}
   <div className={`${jost.className} flex  flex-col  items-start justify-start space-y-3 `}>
    <div style={{fontWeight:500}} className='text-md  pt-4'>The Evolution of Workwear</div>
    <div className='text-xs'>Showcase versatile outfit ideas that strike a balance between professionalism and personal expression.</div>
   </div>

   </div>
    </div>
    </div>
    </div>
  )
}

export default Context