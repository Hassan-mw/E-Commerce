import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import TopLeft from './TopLeft'
import TopRight from './TopRight'
import Left from './Left'
import Right from './Right'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})     

const BelowData = () => {
  return (
    <div className='w-full max-w-[1100px]  flex items-center justify-center px-3 '>


  
  <div className='w-full flex items-center justify-center  space-x-2'>
  <div className='w-full flex flex-col space-y-4 items-center justify-center  '>
     <Left/>

    </div>


   <Right/>


     
    </div>
    </div>
  )
}

export default BelowData