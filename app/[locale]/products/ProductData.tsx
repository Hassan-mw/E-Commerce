import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import { TopNumberProduct, TopNumberProductDataType } from '../Types/dataType'
import ProductArrray from './ProductArrray'
import Image from 'next/image'
import { Jost } from 'next/font/google'
import { FiAlertOctagon } from 'react-icons/fi'

interface dataType{

  data:TopNumberProduct;
  category:string
}


const ProductData = ({data}:TopNumberProductDataType) => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white py-6'>
     {/* <div> */}
     {/* {
      data.length>0 ? */}
                            
     <ProductArrray  data={data}  />
    {/* // : */}
 
    {/* // }  */}
      {/* <TopNUmberProductData data={data} style='lg:grid-cols-3 xl:grid-cols-4' />  */}
     
    {/* </div> */}
    </div>
  )
}

export default ProductData