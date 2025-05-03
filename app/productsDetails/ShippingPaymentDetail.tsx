import { Jost } from 'next/font/google'
import React from 'react'
import Shippingplace from './Shippingplace'
import Table from './Table'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const ShippingPaymentDetail = () => {
  return (
    <div className='w-full border-t  border-[#D9D9D9]  flex flex-col space-y-14 p-5'>
    <div className='w-full max-w-screen-xl  flex flex-col s'>
   <div className='flex flex-col  items-start justify-start space-y-3'>
   <div className={`${jost.className} text-xl lg:text-2xl text-[#262626]`}>Shipping</div>
   <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Calculate the shipping cost by region</div>
   <Shippingplace/>
   <Table/>
   </div>

    </div>
    </div>
  )
}

export default ShippingPaymentDetail