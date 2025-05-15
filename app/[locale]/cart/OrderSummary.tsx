import { Jost } from 'next/font/google'
import React from 'react'
import { CiLock } from "react-icons/ci";
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const OrderSummary = () => {
  return (
    <div className='w-full md:max-h-80 md:w-[80%] lg:w-[40%] flex  items-center justify-center md:rounded-md bg-[#E9E9E9] p-4 '>
    <div className='w-full max-w-[60%] md:max-w-full flex flex-col  space-y-3 '>
    <div className={`${jost.className} text-md`}>Order Summary</div>     
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Price</span><span>$99.23</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Shipping</span><span>$0</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Tax</span><span>$0</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Discount price</span><span>$47.10</span>  </div>    
    <div className='border-b pb-2 border-[#D9D9D9] flex items-center justify-between text-sm'><span className='text-[#555555] flex items-center justify-center gap-x-2'><input type='checkbox' /><span>Pack in a Gift Box</span></span><span>$47.10</span>  </div>    
     <div className='flex items-center justify-between text-sm font-semibold'><span >Total Price</span><span>$110.10</span>  </div>    
     <div className='bg-[#434343] flex items-center justify-center gap-x-3 p-3 rounded-md text-white'>
     <CiLock  size={20} /><span>CHECKOUT</span>
     </div>
   
    </div> 
    </div>
  )
}

export default OrderSummary