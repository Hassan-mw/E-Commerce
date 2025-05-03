import { Jost } from 'next/font/google'
import React from 'react'
import Shippingplace from './Shippingplace'
import Table from './Table'
import Image from 'next/image'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const ShippingPaymentDetail = () => {
  return (
    <div className='w-full border-t  border-[#D9D9D9]  flex flex-col space-y-14 p-5'>
    <div className='w-full max-w-screen-lg  flex flex-col s'>
   <div className='flex flex-col  items-start justify-start space-y-3'>
   <div className={`${jost.className} text-xl lg:text-2xl text-[#262626]`}>Shipping</div>
   <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Calculate the shipping cost by region</div>
   <Shippingplace/>
   <Table/>
   <div className='flex flex-col space-y-3 '>
   <div className={`${jost.className} text-xl lg:text-2xl text-[#262626]`}>Payment</div>
   <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Payment methods supported with our platform</div>
   <div className='flex items-center justify-center gap-x-4'>
    <Image height={80} width={80} className=' object-contain'  src={`/payment_1.png`} alt="payment"/>
    <Image height={35} width={35} className='object-contain '  src={`/payment_2.png`} alt="payment"/>
    <Image height={80} width={80} className='object-contain '  src={`/payment_3.png`} alt="payment"/>

 
   </div>
   </div>
   </div>

    </div>
    </div>
  )
}

export default ShippingPaymentDetail