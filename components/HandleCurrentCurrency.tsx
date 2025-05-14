'use client';
import { DataContext } from '@/app/[locale]/ContextApi/ContextApi'
import React, { useContext } from 'react'

const HandleCurrentCurrency = ({currency,style}:{currency:number,style:string}) => {
   const {currentCurrency,setCurrentCurrency}=useContext(DataContext)
    const [value,symbol]=currentCurrency.split('_')   
  
   console.log(currentCurrency)
   return (
    <div className={`${style} flex items-center justify-center gap-x-0.5`}>
        {/* {currency} */}
      <span>{symbol}</span> <span> { (currency*value).toFixed(0)}</span>
    </div>
  )
}

export default HandleCurrentCurrency