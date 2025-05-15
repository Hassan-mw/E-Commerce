import React from 'react'
import CartProductsColoum from '../CartProductsSection/CartProductsColoum'
import OrderSubmitionCartColumn from '../OrderSummary'

const Cart = () => {
  return (
    <div className='w-full flex flex-col md:flex-row md:space-y-0 md:space-x-12 space-y-8 '>
     <CartProductsColoum/>  
     <OrderSubmitionCartColumn/>  


      </div>
  )
}

export default Cart