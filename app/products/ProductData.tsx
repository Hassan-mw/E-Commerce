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
     <div className='w-full h-full flex flex-col py-16 lg:py-0 lg:pt-10 md:flex-row lg:flex-col gap-5 items-center justify-center '>
    <img className='  object-contain  md:h-48 lg:h-full' src="/no_result.png" alt='noresult_image'/>
   
   
    {/* Content */}
    <div className='max-w-lg w-full p-4 rounded-md flex flex-col space-y-3 border border-[#D9D9D9]'>
      <div className={`${jost.className} text-xl ` }>No result found for searching  "  ".</div>
      <div className='flex items-start justify-start gap-x-3 '><span className='text-[#FF7A00] pt-1'><FiAlertOctagon /></span> <span className='text-sm text-[#555555]'>We recommend you to search different clear key words to get the best result.</span></div>  
      <div className='flex items-start justify-start gap-x-3'><span className='text-[#FF7A00] pt-1'><FiAlertOctagon /></span > <span className='text-sm text-[#555555]'>You can see the most related purchased products bellow.</span></div>  
     </div>

      </div>
    } 
      {/* <TopNUmberProductData data={data} style='lg:grid-cols-3 xl:grid-cols-4' />  */}
     
    {/* </div> */}
    </div>
  )
}

export default ProductData