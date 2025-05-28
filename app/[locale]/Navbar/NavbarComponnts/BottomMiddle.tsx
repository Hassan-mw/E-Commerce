import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const BottomMiddle = () => {
  return (
    <div className='w-full hidden 2xl:block'>
    <div className='w-full border-l flex items-center justify-center'>

        <Image height={50} width={50} src="/shavingmachine-navbar.png" alt='brand'/>
         <div className={` text-white flex flex-col items-start justify-start`}>
        <div style={{fontWeight:200}} className={`${jost.className} text-sm`}>Weekly Men's Toiletries Coupons.</div>
        <div style={{fontWeight:200}} className={`${jost.className} text-xs`}>We extend exclusive discounts to our male clientele.</div>
         </div>
    </div>
    </div>
  )
}

export default BottomMiddle