import { Jost } from 'next/font/google'
import React from 'react'
  
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Shippingplace = () => {
  return (
    <div className='flex items-center justify-center gap-x-8'>
   <div className={`${jost.className} text-sm`}>Shipping to</div>
    </div>
  )
}

export default Shippingplace