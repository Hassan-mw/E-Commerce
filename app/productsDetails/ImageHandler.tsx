'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageHandler = ({images}:{images:string[]}) => {
    const [currentChageImage,setCurrentChangeImage]=useState('')
    console.log(currentChageImage,'🛹🦼🚲🛹🛹🦼🦼')
  return (
    <div className='w-full flex gap-x-4  spcae-y-2 p-5 '>
        {/* Small Images */}
        <div className='   grid grid-cols-1 gap-y-3 grid-rows-6 place-items-center h-[400px]'>
        {images.map((data,index)=>
        <div key={index} className='border h-15 w-full rounded-md border-slate-400'><Image onClick={()=>setCurrentChangeImage(data)} height={400} width={400} className='w-full h-full object-cover  object-center  max-w-20 p-1' src={`/${data}`} alt="Images" /></div>
        )}
        </div>
        {/* Large Image */}
        <div className='w-full bg-[#ffffff]  h-[400px] '>
        <Image  height={200} width={500} quality={100} className='w-full h-full  object-contain  object-center  rounded-md' src={`/${currentChageImage==='' ? images[0] : currentChageImage}`} alt="Images" />
        
        </div>
        {/* Small Images */}
        {/* <div className='w-full flex items-center justify-center py-5'>
        <div className='w-full max-w-48 grid grid-cols-4 '>
        {images.map((data,index)=>
        <div key={index} onClick={()=>setCurrentChangeImage(data)} className={`size-3 border ${currentChageImage===data ? 'bg-blue-500 border-none': 'border-slate-400' } rounded-full`}></div>
      
        )}
        </div>
        </div> */}
    </div>
  )
}

export default ImageHandler