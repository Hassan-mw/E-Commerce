import { Jost } from 'next/font/google'
import React from 'react'
import FlashSalesData from './FlashSalesData'
import { useTranslations } from 'next-intl'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const FlasDeals = () => {
    const t = useTranslations('HomePage');
  
  return (
    <div className='w-full flex items-center justify-center bg-white py-9'>
    <div className='w-full max-w-screen-xl px-10 flex flex-col items-center justify-center'>
     <div style={{fontWeight:200}} className={`${jost.className} w-full flex items-center justify-start text-3xl `}>{t('flashSales')}</div>
      <FlashSalesData/> 
    </div>
    </div>
  )
}

export default FlasDeals