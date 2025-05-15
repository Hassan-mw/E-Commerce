import React from 'react'
import OrderSummary from '../OrderSummary'
import CustomerInfo from '../CartProductsSection/CustomerInfo'

const CustomerInformation = () => {
  return (
        <div className='w-full flex py-10 flex-col md:flex-row md:space-y-0 md:space-x-12 space-y-8 '>
     <CustomerInfo/>  
     <OrderSummary/>  


      </div>
  )
}

export default CustomerInformation