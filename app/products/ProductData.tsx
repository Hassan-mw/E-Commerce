import React from 'react'
import ProductSideBarTrigger from './ProductSideBarTrigger'

import { TopNumberProduct, TopNumberProductDataType } from '../Types/dataType'
import ProductArrray from './ProductArrray'

interface dataType{

  data:TopNumberProduct
}


const ProductData = ({data}:TopNumberProductDataType) => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-6'>
     {/* <div> */}
      <ProductArrray data={data}  /> 
      {/* <TopNUmberProductData data={data} style='lg:grid-cols-3 xl:grid-cols-4' />  */}
     
    {/* </div> */}
    </div>
  )
}

export default ProductData