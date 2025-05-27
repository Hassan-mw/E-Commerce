import React from 'react'
import CartProductsColoum from '../CartProductsSection/CartProductsColoum'
import OrderSubmitionCartColumn from '../OrderSummary'
import { cartDataType } from '../../Types/dataType'

const Cart =({cartData}:cartDataType) => {
  return (
    <div className='w-full py-3 flex flex-col md:flex-row md:space-y-0 md:space-x-12 space-y-8 '>
     <CartProductsColoum  />  
     <OrderSubmitionCartColumn  />  


      </div>
  )
}

export default Cart