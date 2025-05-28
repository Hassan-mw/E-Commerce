'use client';
import { Jost } from 'next/font/google'
import React, { useContext } from 'react'
import { DataContext } from '../ContextApi/ContextApi';

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface DataType{
  length:number;
  category:string;
}


const NumberProductShower = ({length,category}:DataType) => {
       
    // const {length}=useContext(DataContext)
  
  return (
    <div className='  flex items-center justify-start gap-x-3 '>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#262626]`}>{category}</span>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{length} items</span>
      
     </div>
  )
}

export default NumberProductShower