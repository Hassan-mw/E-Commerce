'use client';
import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const NumberProductShower = ({length,category}) => {
  return (
    <div className='  flex items-center justify-start gap-x-3 '>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#262626]`}>{category}</span>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{length} items</span>
      
     </div>
  )
}

export default NumberProductShower