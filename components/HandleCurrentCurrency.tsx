'use client';
import { DataContext } from '@/app/[locale]/ContextApi/ContextApi'
import React, { useContext } from 'react'

const HandleCurrentCurrency = ({currency,style}:{currency:number,style:string}) => {
           const {currentCurrency,setCurrentCurrency}=useContext(DataContext)
    
  return (
    <div className={style}>
        {currency*281}
    </div>
  )
}

export default HandleCurrentCurrency