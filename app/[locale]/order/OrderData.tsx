import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const OrderData = ({cartData,shippingData,paymentData}) => {
  console.log(paymentData,shippingData)
  return (
    <div className='w-full flex flex-col space-y-4 p-5'>
    <div className='w-full flex items-center justify-start text-3xl'>Your Orders</div>
    {/* main - data */}
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8'>
    {cartData.map((data,index)=>
    <div key={index} className=' w-full flex flex-col space-y-0.5 bg-[#eff2f1] rounded-sm p-0.5'>
     {/* Dates */}
     <div className=' bg-white rounded-t-sm p-3 w-full flex items-center justify-between'>
        {/* 1 */}
      <div className='flex flex-col items-start justify-start'>
      <div className={`${jost.className} text-[#555555] text-sm`}>ORDER PLACE</div>  
      <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs`}>19 May,2025</div>  
      </div>  
        {/* 2 */}
      <div className='flex flex-col items-start justify-start'>
      <div className={`${jost.className} text-[#555555] text-sm`}>ORDER ID</div>  
      <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs`}>#JFJ434GGJ4</div>  
      </div>  
        {/* 2 */}
      <div className='flex flex-col items-start justify-start'>
      <div className={`${jost.className} text-[#555555] text-sm`}>DEILVERY TIME</div>  
      <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs`}>{shippingData.time}</div>  
      </div>  
     </div>
     {/* Product-Data */}
     <div className=' h-24 w-full bg-white flex items-start  justify-between px-3'>
     {/* Image + name + color + brand */}
     <div className=' flex items-start justify-start py-3'>
     <div className=' rounded-sm'>
     <Image height={35} width={35} src={`/${data.main_image}`} alt='product_iamge'/>
     </div>
     {/* name + color + brand */}
     <div className='flex  flex-col items-start justify-between space-y-1  pl-3'>
        <div className={`${jost.className} text-md text-[#555555]`}>{data.name}</div>
        <div className={`${jost.className} flex items-center justify-center gap-x-2`}><div className='text-xs text-[#555555]'> Color : </div><div className={`bg-${data.color}-500 size-3 rounded-full`}></div></div>
        <div className={`${jost.className} flex items-center justify-center gap-x-2`}><div className='text-xs text-[#555555]'> Brand : </div><div className='text-xs text-[#363535]'> {data.brand}  </div></div>
     </div>
     </div>
     {/* Number product + default price  */}
     <div className='flex flex-col p-3 '>
      <div className='text-sm '>Product Info</div>
      <div className='text-sm text-[#555555] pl-1'>${data.price}</div>
      <div className='text-sm text-[#555555] pl-1'>x{data.quantity}</div>
     </div>
     {/* Number product + default price  */}
     <div className='flex flex-col p-3'>
     
      <div className='text-sm '>Total</div>
      <div className='text-sm text-[#555555]'>${data.productprice}</div>
     </div>
     </div>
     {/* payment -method */}
     <div className=' w-full flex items-center bg-white justify-between px-3'>
     {/* Image  */}
     <Image height={60} width={60} className='object-contain' src={`/${paymentData.image}`} alt='product_iamge'/>
      {/* payment_method */}
      <div  className={`text-[#555555] font-semibold text-sm`}>{paymentData.method}</div>


 
   
     </div>

     {/* shipping -method */}
     <div className=' w-full flex items-center bg-white justify-between px-3'>
     {/* Image  */}
     <Image height={60} width={60} className='object-contain' src={`/${shippingData.image}`} alt='product_iamge'/>
      {/* payment_method */}
      <div  className={`text-[#555555] font-semibold text-sm`}>{shippingData.name}</div>


 
   
     </div>
    </div>

     )}

  
    </div>
    </div>
  )
}

export default OrderData