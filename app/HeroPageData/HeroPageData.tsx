import React from 'react'

import { Jost } from 'next/font/google'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const HeroPageData = () => {
  return (
    <div className={`${jost.className} w-full sm:w-[500px] md:w-full flex flex-col space-y-2 `}>
      <div  className={`${jost.className} text-7xl font-bold`}>Furnimal</div>
      <div  className={`${jost.className} text-3xl font-semibold `}>Furniture Store Shopify Theme</div>
      <div  className={`${jost.className} text-md  text-[#66666b]`}> A best template for different purposes that creativity, efficiency, and diversity.</div>
       
    </div>
  )
 
}

export default HeroPageData