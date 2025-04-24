import React from 'react'
import ProductSideBarTrigger from './ProductSideBarTrigger'
import TopNUmberProductData from '../HomePageComponents/TopNumbersProduct/TopNumberProductData'
import ProductDataArray from './ProductDataArray'

const ProductData = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-6'>
     <div>
        <ProductDataArray/>
    </div>
    </div>
  )
}

export default ProductData