import React from 'react'
import CartProductsColoum from '../CartProductsSection/CartProductsColoum'
import OrderSubmitionCartColumn from '../CartProductsSection/OrderSubmitionCartColumn'

const Cart = () => {
  return (
    <div className='w-full flex flex-col sm:flex-row space-y-8 '>
     <CartProductsColoum/>  
     <OrderSubmitionCartColumn/>  


      </div>
  )
}

export default Cart