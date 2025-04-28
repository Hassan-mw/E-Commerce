import React from 'react'
import ImageHandler from './ImageHandler'
import TopDataHandler from './TopDataHandler'
import { ProductDetailsDataType } from '../Types/dataType'

const ProductDetailsData = ({images,name,price}:ProductDetailsDataType) => {
  return (
    <div className='w-full flex flex-col space-y-4'>
     <div className='w-full grid grid-cols-1 gap-x-2'>
      <ImageHandler images={images}/> 
      <TopDataHandler price={price} name={name}  /> 
     </div>
    </div>
  )
}

export default ProductDetailsData