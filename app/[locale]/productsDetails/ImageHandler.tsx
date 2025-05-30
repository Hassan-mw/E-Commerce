'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageHandler = ({images}:{images:string[]}) => {
    const [currentChageImage,setCurrentChangeImage]=useState('')
    console.log(currentChageImage,'🛹🦼🚲🛹🛹🦼🦼')
  return (
    <div className='w-full md:w-5/6 flex gap-x-4  spcae-y-2 p-5 '>
        {/* Small Images */}
        <div className='   grid grid-cols-1 gap-y-3 grid-rows-6 place-items-center h-[400px]'>
        {images.map((data,index)=>
        <div key={index} className='border h-15 w-full rounded-md border-slate-400'>
          <Image  loading='lazy'  onClick={()=>setCurrentChangeImage(data)} height={400} width={400} className='w-full h-full object-contain  object-center  max-w-20 p-1' src={`/${data}`} alt="Images" /></div>
        )}
        </div>
    
       <div className='w-full bg-[#ffffff]  h-[400px] '>
        <Image loading='lazy'  height={200} width={500} quality={100} className='w-full h-full  object-contain  object-center  rounded-md' src={`/${currentChageImage==='' ? images[0] : currentChageImage}`} alt="Images" />
        
        </div> 
       
    </div>
  )
}

export default ImageHandler