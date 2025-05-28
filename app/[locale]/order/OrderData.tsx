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
     {orderData.map((data,index)=>
    <div  key={index} className=" hover:shadow-md hover:shadow-black/20 border border-slate-200 duration-500 rounded-lg p-4 mb-6">
  
    {/* DATES */}
    <div className="grid grid-cols-3 text-sm  w-full text-gray-600 border-b border-gray-200 pb-2">
    <span className='flex flex-col gap-1 lg:flex-row'><strong>ORDER PLACE:</strong>{data.created_at}</span>
    <span  className='flex flex-col items-center justify-center  lg:flex-row  lg:gap-x-3'><strong>ORDER ID:</strong> #JFJ434GGJ4</span>
    <span  className='flex flex-col items-end justify-end  lg:flex-row  lg:gap-x-3'><strong>DELIVERY TIME:</strong> {shippingData.time}</span>
    </div>
   
    {/* Content */}
    <div  className="flex items-center py-4 border-b  border-gray-200 gap-x-6">

    {/* Image */}
    <Image height={50} width={50} src={`/${data.main_image}`} alt='product_iamge'/>
      

    {/* Name + price per product */}
    <div className="flex-1">
    <p className="font-semibold">{data.name}</p>
    <p className="text-sm text-gray-600">${data.price} × {data.quantity}</p>
    </div>


    {/* Total price */}
    <div className="text-right font-bold">${data.productprice}</div>

    </div>
  

    {/* DeliveryData */}
    <div className='w-full grid grid-cols-3 mt-4'>


    {/* Delivery Info */}
    <div className="flex flex-col items-center  ">
     <div className="flex flex-col text-gray-500 items-start  justify-start text-sm">
     <p className="font-semibold  text-gray-700 pb-1">DELIVERY TO:</p>
     <p>{customerData.firstname} {customerData.lastname}</p>
     <p>{customerData.address}</p>
     <p>Mobile: {customerData.phone}</p>
     </div>
    </div>



    {/* Payment Info */}
    <div className="text-gray-500 flex flex-col items-center  ">
    <div className="flex flex-col items-start  justify-start text-sm">
    <p className="font-semibold text-gray-700 pb-1">PAYMENT METHOD: <span></span></p>
    <p>Method: <span className="text-green-600 font-semibold">{paymentData.method}</span></p>
    <p>Status: <span className="text-green-600 font-semibold">Paid</span></p>
    <p>Visa ending in 1234</p>
    </div>
    </div>
  

    {/* Total */}
    <div className='flex flex-col items-end  ' >
    <div className='flex flex-col items-center   ' >
    <p className="font-semibold text-slate-700 ">TOTAL PRICE:</p>
    <div className="text-right text-slate-900 font-semibold">$ {data.productprice+shippingData.cost}</div>
    </div>
    </div>


    </div>


    {/* Buttons */}
    <div className="mt-4 flex justify-center gap-x-6">
    <button className="text-black border hover:bg-blue-600 hover:cursor-pointer duration-500 border-slate-300 px-4 py-1 rounded hover:text-white">View Detail</button>
    <button className="bg-blue-600 hover:cursor-pointer duration-500 text-white px-4 py-1 rounded hover:bg-blue-700">Track Order</button>
    </div>


    </div>
     )}



  
    </div>
 </div>

  )
}

export default OrderData