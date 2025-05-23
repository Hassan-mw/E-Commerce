import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const OrderData = ({activeOrdersData,orderData,cartData,shippingData,paymentData,customerData}) => {
  


  
  return (
    <div className='w-full flex flex-col space-y-4 p-5'>
      
    <div className='w-full flex items-center justify-start text-3xl'>Your Orders</div>
    {/* main - data */}
    {/* <div className='w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-8'> */}
 
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
  {/* Header */}
  <div className="flex justify-between text-sm text-gray-600 border-b pb-2">
    <span><strong>ORDER PLACE:</strong> 19 May, 2025</span>
    <span><strong>ORDER ID:</strong> #JFJ434GGJ4</span>
    <span><strong>DELIVERY TIME:</strong> {shippingData.time}</span>
  </div>
   {activeOrdersData.map((data,index)=>
  
  <div  key={index} className="flex items-center py-4 border-b gap-x-6">
        <Image height={35} width={35} src={`/${data.main_image}`} alt='product_iamge'/>

    <div className="flex-1">
      <p className="font-semibold">{data.name}</p>
      <p className="text-sm text-gray-600">${data.price} × {data.quantity}</p>
    </div>
    <div className="text-right font-bold">${data.productprice}</div>
  </div>
     )}
  
  <div className='w-full flex items-start justify-between'>
  {/* Delivery Info */}
  <div className="mt-4 text-sm text-gray-700">
    <p className="font-semibold">DELIVERY TO:</p>
    <p>{customerData.firstname} {customerData.lastname}</p>
    <p>{customerData.address}</p>
    <p>Mobile: {customerData.phone}</p>
  </div>
    <div >
    <p className="font-semibold text-gray-700">TOTAL PRICE:</p>
    <div className="text-right font-bold">$ {orderData.totalprice}</div>
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
    <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-50">View Detail</button>
    <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Track Order</button>
  </div>
</div>



  
    </div>
    // </div>
  )
}

export default OrderData