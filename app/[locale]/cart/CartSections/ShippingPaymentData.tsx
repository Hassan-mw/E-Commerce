import Image from 'next/image'
import React from 'react'

const ShippingPaymentData = () => {
  return (
       <div className='w-full flex flex-col space-y-12 px-5'>

    <div className='w-full flex flex-col space-y-4 '>
    <div className='flex flex-col items-start justify-start'>
    <div className='text-xl font-semibold'>Customer Information</div>
    <div className='text-xs'>Pleease choose a payment method</div>
    </div>
    <div className='w-full flex flex-col space-y-2 p-4 rounded-md bg-[#E9E9E9]'>
    <div className='flex items-center justify-between'><div><input className='border-[#D9D9D9] p-2 size-5' type='radio'/></div> <div className='p-1 bg-white'><Image height={50} width={50} src="/Paypal_method.png" alt="paypal_methoad" /></div>  </div> 
    <div className='flex items-center justify-center'><div className='w-full max-w-[80%] text-xs text-[#555555]'>PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically. </div></div>
    </div>


    </div>
    
    <div className='w-full flex flex-col space-y-4'>
     <div className='tex-xl font-semibold'>Customer Information</div>
     {/* Country */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Country</div>
     <select className='border border-[#D9D9D9] focus:outline-none text-[#555555] w-full rounded-sm p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>

     {/* State/Region */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>State/Region</div>
     <select className='border border-[#D9D9D9] focus:outline-none text-[#555555] w-full rounded-sm p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>


     {/* Address */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>State/Region</div>
     <input type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

     {/* Phone Number */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'> Phone Number </div>
     <input type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>


    </div>

    </div>
  )
}

export default ShippingPaymentData