import React from 'react'

const OrderDates = () => {
  return (
     <div className='w-[300px] hidden_show_md flex flex-col space-y-5 p-5'>
         
   <div className='w-full flex items-center justify-start text-2xl'>Order Dates</div>
   <div className='flex flex-col items-center  border-slate-300 border p-3 rounded-md'>
    <span className='w-full flex justify-center bg-blue-500 p-1   text-white'>7-3-2025</span>
    <span className='w-full flex justify-center bg-slate-400 p-1   text-white'>7-3-2025</span>
    <span className='w-full flex justify-center text-black bg-slate-300 p-1  '>7-3-2025</span>
   </div>   
    </div>
  )
}

export default OrderDates