'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FiSearch } from "react-icons/fi";
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
const TopLeft = () => {


    const [model,setModel]=useState('all')
    const searchParams=useSearchParams()
    const pathName=usePathname()
    const router=useRouter()
   
  
    useEffect(()=>{
      const params=new URLSearchParams(searchParams)
  
      if(model!=='all')  params.set('model',model); else params.delete('model');
      router.replace(`${pathName}?${params.toString()}`,{scroll:false})
    },[model])
  

  return (
    <div className='w-full flex items-center justify-start md:justify-between gap-x-12 '>
    <Link href="/" className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></Link>
    <div className='flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
      <div className='w-1/2 '><input type='text' className='w-5/6  focus:outline-none placeholder:text-slate-500 placeholder:text-sm ' placeholder='Search Product'/></div>
     <div className='mr-5 '>
      <Select value={model} onValueChange={(e)=>setModel(e)}>
      <SelectTrigger className="w-[120px] outline-none border-none shadow-none z-20 ">
        <SelectValue className='placeholder:text-slate-500' placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="shorts">Shorts</SelectItem>
          <SelectItem value="mid-length">Mid Length</SelectItem>
          <SelectItem value="sweather">Sweather</SelectItem>
          <SelectItem value="party-dresses">Party Dresses</SelectItem>
          <SelectItem value="reqular-fit">Regular Fit</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select></div>
    <Link href={`/products`} className='border-l pl-2'>
    <FiSearch size={20} />
    </Link>
    </div>
</div>
  )
}

export default TopLeft