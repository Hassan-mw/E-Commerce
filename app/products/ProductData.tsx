import React from 'react'
import ProductSideBarTrigger from './ProductSideBarTrigger'
import TopNUmberProductData from '../HomePageComponents/TopNumbersProduct/TopNumberProductData'

const ProductData = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-6'>
     <div>
      <TopNUmberProductData style='lg:grid-cols-3 xl:grid-cols-4' /> 
     
    </div>
    </div>
  )
}

export default ProductData