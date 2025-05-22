import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const OrderData = () => {
  return (
    <div className='w-full flex flex-col space-y-4 p-5'>
    <div className='w-full flex items-center justify-start text-3xl'>Your Orders</div>
    {/* main - data */}
    <div className='w-full flex flex-col space-y-3 bg-[#eff2f1] rounded-sm p-3'>
     {/* Dates */}
     <div className='w-full flex items-center justify-between'>
        {/* 1 */}
      <div className='flex flex-col items-start justify-start'>
      <div className={`${jost.className} text-sm`}>ORDER PLACE</div>  
      <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs`}>19 May,2025</div>  
      </div>  
        {/* 2 */}
      <div className='flex flex-col items-start justify-start'>
      <div className={`${jost.className} text-sm`}>ORDER ID</div>  
      <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs`}>#JFJ434GGJ4</div>  
      </div>  
        {/* 2 */}
      <div className='flex flex-col items-start justify-start'>
      <div className={`${jost.className} text-sm`}>DEILVERY TIME</div>  
      <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs`}>12-14 days</div>  
      </div>  
     </div>
     {/* Product-Data */}
     <div className='w-full flex items-center justify-between'>
     {/* Image + name + color + brand */}
     <div className='flex items-center justify-center'>
     <div className=''>
     <Image height={120} width={120} src="/" alt='product_iamge'/>
     </div>
     </div>
     </div>
    </div>
    </div>
  )
}

export default OrderData