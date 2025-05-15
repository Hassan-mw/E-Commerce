import React from 'react'
import CartProductsColoum from '../CartProductsSection/CartProductsColoum'
import OrderSummary from '../OrderSummary'
import ProductConfirmationData from '../CartProductsSection/ProductConfirmationData'

const ProductConfirmation = () => {
  return (
     <div className='w-full py-12 flex flex-col md:flex-row md:space-y-0 md:space-x-12 space-y-8 '>
      <ProductConfirmationData/>
     <OrderSummary/>  


      </div>
  )
}

export default ProductConfirmation