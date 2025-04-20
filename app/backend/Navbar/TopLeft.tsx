'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TopLeft = () => {
  return (
    <div className='w-full flex items-center justify-center gap-x-6'>
    <div className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></div>
    <div className='flex items-center justify-center border border-slate-200 rounded-sm py-1 px-2'>
      <div><input type='text' className='focus:outline-none placeholder:text-slate-500 placeholder:text-sm ' placeholder='Search Product'/></div>
    </div>
</div>
  )
}

export default TopLeft