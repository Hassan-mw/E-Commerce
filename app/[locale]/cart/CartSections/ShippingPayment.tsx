import React from 'react'
import OrderSummary from '../OrderSummary'
import ShippingPaymentData from './ShippingPaymentData'

const ShippingPayment = () => {
  return (
     <div className='w-full flex py-10 flex-col md:flex-row md:space-y-0 md:space-x-12 space-y-8 '>
     <ShippingPaymentData/>  
     <OrderSummary/>  


      </div>
  )
}

export default ShippingPayment