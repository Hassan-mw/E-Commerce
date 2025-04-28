import React from 'react'
import ImageHandler from './ImageHandler'
import TopDataHandler from './TopDataHandler'
import { ProductDetailsDataType } from '../Types/dataType'

const ProductDetailsData = ({images,name,price,color,quantity,size}:ProductDetailsDataType) => {
  return (
    <div className='w-full flex flex-col space-y-4'>
     <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-x-2'>
      <ImageHandler images={images}/> 
      <TopDataHandler images={images} price={price} name={name} color={color} quantity={quantity} size={size}  /> 
     </div>
    </div>
  )
}

export default ProductDetailsData