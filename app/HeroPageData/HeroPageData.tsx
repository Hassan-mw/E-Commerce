import React from 'react'

import { Jost } from 'next/font/google'
import Button from '@/components/Button'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const HeroPageData = () => {
  return (
    <div className={`${jost.className} w-full sm:w-[500px] md:w-full flex flex-col space-y-2 pl-7 lg:space-y-2 `}>
      <div  className={`${jost.className} text-7xl font-bold text-[#b6886c]`}>Limunea</div>
      <div  className={`${jost.className} text-3xl font-semibold text-[#d8a07d]`}>Furniture Store Shopify Theme</div>
      <div  className={`${jost.className} text-md  text-[#66666b] lg:pb-14`}> A best template for different purposes that creativity, efficiency, and diversity.</div>
       <Button href="/products/all" style="px-4 py-2 text-md bg-[#dfb9a1] w-32 flex items-cener justify-center text-black rounded-md  "   >Buy Now</Button>
    </div>
  )
 
}

export default HeroPageData