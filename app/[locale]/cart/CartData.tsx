import React from 'react'
import CartNavbar from './CartNavbar'
import CartColoum from './CartColoum'

const CartData = () => {
  return (
    <div className='w-full flex flex-col '> 
    <CartNavbar/>
    <CartColoum/>
    </div>
  )
}

export default CartData