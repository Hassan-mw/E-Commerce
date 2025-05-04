import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

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
    <div className='flex flex-col items-start justify-start space-y-5  text-white'>
     <div className='text-2xl sm:text-3xl  md:text-5xl font-bold '>Stunning barefooted <br/> woman of 2023</div>
     <div style={{fontWeight:200}} className='text-lg md:text-xl lg:text-2xl font-bold  max-w-60 sm:max-w-80 md:max-w-96 lg:max-w-[500px] xl:max-w-[650px] '>In the heart of a chic urban studio, the atmosphere buzzed with excitement as a trendy fur coat took center stage during a vibrant photoshoot.</div>
    
    
    {/* 3-Icons */}
     <div className='flex items-center justify-center space-x-8 '>
     <div className='flex items-center justify-center gap-x-2'> <span>20 July 2020</span></div>   
     <div className='flex items-center justify-center gap-x-2'> <span>830</span></div>   
     <div className='flex items-center justify-center gap-x-2'> <span>19</span></div>   
     </div>
    
    {/* Button */}
    <div className='border rounded-md flex items-center justify-center gap-x-2 px-3 py-2'>
    <div>READ MORE</div>
    </div>
    </div>
    </div>
  )
}

export default Context