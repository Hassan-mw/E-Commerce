import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import { MdMenu } from 'react-icons/md'
import Image from 'next/image'
import { Jost } from 'next/font/google'
import { FaCartArrowDown } from 'react-icons/fa6'


import Sidebar from './Sidebar'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Navbar = () => {
  return (
    <div className='w-full   flex flex-col items-center justify-center pt-4 space-y-4 pb-3 lg:pb-0'>
      <div className='hidden lg:block w-full '>
     {/*//! Top  */}
     <Top/>
     {/*//! Bottom  */}
     <Bottom/>
    </div>
    <div className='w-full lg:hidden '>
    <div className='w-full flex flex-col space-y-5 items-center justify-center px-5 sm:px-7  '>
    <div className='w-full flex items-center justify-between '>
 

<Sidebar/>

    <Link href="/" className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></Link>
    <div className='flex items-center justify-center gap-x-2'><FaCartArrowDown size={20}  /><span className='text-xl'>Card</span></div>
    </div>
    <div className='w-full sm:w-[70%] flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
      <div className='w-full '><input type='text' className='w-5/6   focus:outline-none placeholder:text-slate-500 placeholder:text-sm ' placeholder='Search Product'/></div>
     <div className='mr-5 '><Select>
      <SelectTrigger className="w-[150px] sm:w-[200px] outline-none border-none shadow-none z-20 bg-white ">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className='bg-white border-slate-100'>
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
    </div>
    </div>
  )
}

export default Navbar