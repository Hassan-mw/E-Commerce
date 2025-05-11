import React from 'react'
import ProductSideBarTrigger from './ProductSideBarTrigger'

import { TopNumberProduct, TopNumberProductDataType } from '../Types/dataType'
import ProductArrray from './ProductArrray'
import Image from 'next/image'

interface dataType{

  data:TopNumberProduct
}


const ProductData = ({data}:TopNumberProductDataType) => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-6'>
     {/* <div> */}
     {
      data.length>0 ?
                            
     <ProductArrray data={data}  />
    :
     <div className='w-full h-full flex flex-col space-y-5 items-center justify-center bg-green-800'>
    <Image height={1000} width={1000} className=' w-full h-full object-contain  ' src="/no_result.png" alt='noresult_image'/>
    <div className='w-full p-4 rounded-md flex flex-col pace-y-3 '>
      <div></div>

    </div>
      </div>
    } 
      {/* <TopNUmberProductData data={data} style='lg:grid-cols-3 xl:grid-cols-4' />  */}
     
    {/* </div> */}
    </div>
  )
}

export default ProductData