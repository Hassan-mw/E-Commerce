'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'



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
import { DataContext } from '../../ContextApi/ContextApi'
import HandleSelect from './HandleSelect'

type DataType={
  brand:string;
}
const TopLeft = () => {


    // const [model,setModel]=useState('all')
    const searchParams=useSearchParams()
    const pathName=usePathname()
    const router=useRouter()
    
  
 
  

  return (
    <div className='w-full flex items-center justify-start md:justify-between gap-x-12 '>
    <Link href="/" className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></Link>
    {/* <div className='flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
      <div className='w-1/2 '><input type='text' className='w-5/6  focus:outline-none placeholder:text-slate-500 placeholder:text-sm ' placeholder='Search Product'/></div>
     <div className='mr-5 '>
      <Select value={brand} onValueChange={(e)=>setBrand(e)}>
      <SelectTrigger className="w-[120px] outline-none border-none shadow-none z-20 ">
        <SelectValue className='placeholder:text-slate-500' placeholder="Category" />
      </SelectTrigger>
      <SelectContent className='bg-white text-black'>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="oukods">Oukods</SelectItem>
          <SelectItem value="tiger">Tiger</SelectItem>
          <SelectItem value="kirana">Kirana</SelectItem>
          <SelectItem value="prettygarden">Prettygarden</SelectItem>
          <SelectItem value="qualfort">Qualfort</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select></div>
    <Link href="/products/All" className='border-l pl-2'>
    <FiSearch size={20} />
    </Link>
    </div> */}
    <HandleSelect/>
</div>
  )
}

export default TopLeft