import { Jost } from 'next/font/google'
import React from 'react'
  
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Shippingplace = () => {
  return (
    <div className='flex items-center justify-center gap-x-8'>
   <div style={{fontWeight:300}} className={`${jost.className} text-sm`}>Shipping to</div>
   <div className=' '><Select>
      <SelectTrigger className="w-[150px] border-[#C4C4C4] z-20 ">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className='bg-white border-[#C4C4C4] '>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select></div>
    </div>
  )
}

export default Shippingplace