import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const OrderData = ({activeOrdersData,orderData,cartData,shippingData,paymentData,customerData}) => {
  


  
  return (
    <div className='w-full flex flex-col space-y-5 p-5'>
      
    <div className='w-full flex items-center justify-start text-2xl'>Your Orders</div>
    {/* main - data */}
    <div className='w-full grid gap-y-8'>
     {activeOrdersData.map((data,index)=>
    <div  key={index} className=" hover:shadow-xl hover:shadow-black/20 duration-500 border border-blue-200 rounded-lg p-4 mb-6">
   {/* Header */}
   <div className="grid grid-cols-3 text-sm  w-full text-gray-600 border-b border-gray-200 pb-2">
    <span className='flex flex-col gap-1 lg:flex-row'><strong>ORDER PLACE:</strong> 19 May, 2025</span>
    <span  className='flex flex-col items-center justify-center  lg:flex-row  lg:gap-x-3'><strong>ORDER ID:</strong> #JFJ434GGJ4</span>
    <span  className='flex flex-col items-end justify-end  lg:flex-row  lg:gap-x-3'><strong>DELIVERY TIME:</strong> {shippingData.time}</span>
   </div>
   
  
  <div  className="flex items-center py-4 border-b  border-gray-200 gap-x-6">
    <Image height={35} width={35} src={`/${data.main_image}`} alt='product_iamge'/>

    <div className="flex-1">
      <p className="font-semibold">{data.name}</p>
      <p className="text-sm text-gray-600">${data.price} × {data.quantity}</p>
    </div>
    <div className="text-right font-bold">${data.productprice}</div>
  </div>
  
  <div className='w-full flex items-start justify-between pt-4'>
  {/* Delivery Info */}
  <div className="mt-4 text-sm text-gray-700">
    <p className="font-semibold">DELIVERY TO:</p>
    <p>{customerData.firstname} {customerData.lastname}</p>
    <p>{customerData.address}</p>
    <p>Mobile: {customerData.phone}</p>
  </div>
  {/* TOtal */}
    <div >
    <p className="font-semibold text-gray-700">TOTAL PRICE:</p>
    <div className="text-right text-black/80 font-bold">$ {orderData.totalprice}</div>
    </div>
    </div>
  {/* Payment Info */}
  <div className="mt-4 text-sm text-gray-700">
    <p className="font-semibold">PAYMENT METHOD: <span></span></p>
    <p>Method: <span className="text-green-600 font-semibold">{paymentData.method}</span></p>
    <p>Status: <span className="text-green-600 font-semibold">Paid</span></p>
    <p>Visa ending in 1234</p>
  </div>

  {/* Buttons */}
  <div className="mt-4 flex justify-end gap-2">
    <button className="text-black border border-black px-4 py-1 rounded hover:bg-blue-50">View Detail</button>
    <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Track Order</button>
  </div>
</div>
     )}



  
    </div>
 </div>

  )
}

export default OrderData