import React from 'react'
import ImageHandler from './ImageHandler'

const ProductDetailsData = () => {
  return (
    <div className='w-full flex flex-col space-y-4'>
     <div className='w-full grid grid-cols-1 gap-x-2'>
      <ImageHandler/> 
     </div>
    </div>
  )
}

export default ProductDetailsData