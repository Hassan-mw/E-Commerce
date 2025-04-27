import React from 'react'
import ImageHandler from './ImageHandler'

const ProductDetailsData = ({images}) => {
  return (
    <div className='w-full flex flex-col space-y-4'>
     <div className='w-full grid grid-cols-1 gap-x-2'>
      <ImageHandler images={images}/> 
      <TopDataHandler images={images}/> 
     </div>
    </div>
  )
}

export default ProductDetailsData