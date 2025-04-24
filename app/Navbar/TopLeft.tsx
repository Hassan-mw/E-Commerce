'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'



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
const TopLeft = () => {
  return (
    <div className='w-full flex items-center justify-start md:justify-between gap-x-12 '>
    <Link href="/" className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></Link>
    <div className='flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
      <div className='w-1/2 '><input type='text' className='w-5/6  focus:outline-none placeholder:text-slate-500 placeholder:text-sm ' placeholder='Search Product'/></div>
     <div className='mr-5 '><Select>
      <SelectTrigger className="w-[100px] outline-none border-none shadow-none z-20 ">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select></div>
    <div className='border-l pl-2'>
    <FiSearch size={20} />
    </div>
    </div>
</div>
  )
}

export default TopLeft