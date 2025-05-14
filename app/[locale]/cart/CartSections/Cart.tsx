import React from 'react'
import CartProductsColoum from '../CartProductsSection/CartProductsColoum'
import OrderSubmitionCartColumn from '../CartProductsSection/OrderSubmitionCartColumn'

const Cart = () => {
  return (
    <div className='w-full flex flex-col bg-green-400'>
     <CartProductsColoum/>  
     <OrderSubmitionCartColumn/>  


      </div>
  )
}

export default Cart