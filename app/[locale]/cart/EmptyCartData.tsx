import Image from 'next/image'
import React from 'react'

const EmptyCartData = () => {
  return (
    <div className='w-full  h-40 flex py-20 items-center justify-center'>
    <div><Image height={300} width={300} src="/no_cart.webp" alt="no_cart" /></div>
    </div>
  )
}

export default EmptyCartData