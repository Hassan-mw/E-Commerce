import Image from 'next/image'
import React from 'react'

const ImageHandler = ({images}:{images:string[]}) => {
    console.log(images)
  return (
    <div className='w-full flex flex-col spcae-y-2 '>
        {/* Small Images */}
        <div className='w-full grid grid-cols-4 bg-green-600'>
        {images.map((data,index)=>
        <Image key={index} height={400} width={400} className='w-full h-full object-cover p-2 object-center max-h-48' src={`/${data}`} alt="Images" />
        )}
        </div>

    </div>
  )
}

export default ImageHandler