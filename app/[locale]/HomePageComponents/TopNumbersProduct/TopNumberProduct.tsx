import { Jost } from 'next/font/google'
import React from 'react'
import TrendingProductData from '../TrendingProduct/TrendingProductData'
import TopNUmberProductData from './TopNumberProductData'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TopNumberProduct = () => {
  return (
    <div className='w-full flex items-center justify-center bg-white py-9'>
    <div className='w-full max-w-screen-xl px-10 flex flex-col items-center justify-center'>
     <div style={{fontWeight:500}} className={`${jost.className} w-full flex items-center justify-start text-3xl `}>Top 100</div>
      <TopNUmberProductData style='lg:grid-cols-4' /> 
    </div>
    </div>

  )
}

export default TopNumberProduct