import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const ShippingPaymentData = () => {
  return (
       <div className='w-full   flex flex-col space-y-16 px-5'>

    <div className='w-full flex flex-col space-y-8 '>
    <div className='flex flex-col items-start justify-start space-y-1'>
    <div className='text-xl font-semibold'>Payment</div>
    <div className='text-[10px]  text-[#555555]'>Pleease choose a payment method</div>
    </div>

   {/* 1 */}
  <div className='w-full flex items-start justify-between p-4 border border-slate-200 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input className='border-[#D9D9D9]  size-4' type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>Paypal</div>
   <div className='text-xs text-[#555555]'>PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.</div>
  </div>
   </div>
   {/* Right */}
   <Image height={50} width={50}  className="object-contain"  src="/Paypal_method.png" alt="paypal_methoad" />
  </div>
    
   {/* 2 */}
  <div className='w-full flex items-start justify-between p-4 border border-slate-200 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input className='border-[#D9D9D9]  size-4' type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>Mastercard</div>
   <div className='text-xs text-[#555555]'>Mastercard is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.</div>
  </div>
   </div>
   {/* Right */}
   <Image height={40} width={40}  className="object-contain"  src="/mastercard_image_shipping.png"  alt="mastercard_methoad" />
  </div>
    
   {/* 3 */}
  <div className='w-full flex items-start justify-between p-4 border border-slate-200 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input className='border-[#D9D9D9]  size-4' type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>Bitcoin</div>
   <div className='text-xs text-[#555555]'>Bitcoin is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.</div>
  </div>
   </div>
   {/* Right */}
   <Image height={50} width={50}  className="object-contain"  src="/bitcoin_method.png"  alt="bitcoin_methoad" />
  </div>
    
    </div>


    <div className='w-full flex flex-col space-y-8 '>
    <div className='flex flex-col items-start justify-start space-y-1'>
    <div className='text-xl font-semibold'>Shipping</div>
    <div className='text-xs text-[#555555]'>Please choose a shipping company based on your region</div>
    </div>


   {/* 1 */}
  <div className='w-full flex items-start border border-slate-200 justify-between p-4 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input className='border-[#D9D9D9]  size-4' type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>AUSFF</div>
   <div className='text-[10px] text-[#555555]'>Delivery time:14-21days</div>
   <div className='text-[10px]  text-[#555555]'>Shipping cost :Free</div>
   <div className='text-[10px]  text-[#555555]'>Insurance : <span className='text-[#FF2E00]'> Unavaliable</span></div>
  </div>
   </div>
   {/* Right */}
   <Image height={70} width={70} className="object-contain" src="/shipping_company_1.png" alt="paypal_methoad" />  
  </div>
    
   {/* 2 */}
  <div className='w-full flex items-start border border-slate-200 justify-between p-4 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input className='border-[#D9D9D9]  size-4' type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold  pb-2 text-[#262626]'>RaceCourieser</div>
   <div className='text-[10px]  text-[#555555]'>Delivery time: 14-21 days</div>
   <div className='text-[10px]  text-[#555555]'>Shipping cost: Free</div>
   <div className='text-[10px]  text-[#555555]'>Insurance : <span className='text-[#00A95D]'> Avaliable</span></div>
  </div>
   </div>
   {/* Right */}
   <Image height={70} width={70} className="object-contain" src="/shipping_company_2.png" alt="paypal_methoad" />  
  </div>
    
   {/* 3 */}
  <div className='w-full flex items-start border border-slate-200 justify-between p-4 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input className='border-[#D9D9D9]  size-4' type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>RaceCourieser</div>
   <div className='text-[10px]  text-[#555555]'>Delivery time: 14-21 days</div>
   <div className='text-[10px]  text-[#555555]'>Shipping cost: Free</div>
   <div className='text-[10px]  text-[#555555]'>Insurance : <span className='text-[#00A95D]'> Avaliable</span></div>
  </div>
   </div>
   {/* Right */}
   <Image height={70} width={70} className="object-contain" src="/shipping_company_3.png" alt="paypal_methoad" />  
  </div>
    


  

    </div>
    </div>
    
 ) }

export default ShippingPaymentData