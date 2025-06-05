

import { FaCartArrowDown } from 'react-icons/fa6'


import Sidebar from './NavbarComponnts/Sidebar'

import Image from 'next/image'

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
import { TfiPackage } from 'react-icons/tfi'
import { useContext } from 'react'
import { DataContext } from '../ContextApi/ContextApi'
import { Jost } from 'next/font/google'
import TopRight from './NavbarComponnts/TopRight'
import BottomRight from './NavbarComponnts/BottomRight'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const SmallScreen = () => {
      const {brand,setBrand}=useContext(DataContext)

  return (
    <div className='w-full lg:hidden '>
    <div className='w-full flex flex-col space-y-5 items-center justify-center px-5 sm:px-7  '>
    <div className='w-full flex items-center justify-between '>
 

     <Sidebar/>

    <Link href="/" className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></Link>
    
    <BottomRight/>
    {/* <div className='flex items-center justify-center gap-x-4'>
    <Link href="/cart" className='flex items-center justify-center gap-x-2 '><span className='hover:text-blue-400 duration-500'><FaCartArrowDown size={18}  /></span><span className='text-xl  hidden md:block'>Card</span></Link>
    <Link href='/order' className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><span className='hover:text-blue-400 duration-500'><TfiPackage /></span><span  className="hidden md:block">Order</span>  </Link>
    </div> */}

    </div>

    <div className='w-full sm:w-[70%] flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
      <div className='w-full '><input type='text' className='w-5/6   focus:outline-none placeholder:text-slate-500 placeholder:text-sm ' placeholder='Search Product'/></div>
     <div className='mr-5 '>
        <Select value={brand} onValueChange={(e)=>setBrand(e)}>
      <SelectTrigger className="w-[120px] outline-none border-none shadow-none z-20 ">
        <SelectValue className='placeholder:text-slate-500' placeholder="Category" />
      </SelectTrigger>
      <SelectContent className='bg-white text-black'>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="oukods">Oukods</SelectItem>
          <SelectItem value="tiger">Tiger</SelectItem>
          <SelectItem value="kirana">Kirana</SelectItem>
          <SelectItem value="prettygarden">Prettygarden</SelectItem>
          <SelectItem value="qualfort">Qualfort</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    <div className='border-l pl-2'>
    <FiSearch size={20} />
    </div>
    </div>

    <Link href="/login">Login</Link>
    </div>
    </div>
  )
}

export default SmallScreen