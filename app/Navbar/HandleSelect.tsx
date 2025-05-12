'use state'

type DataType={
  brand:string;
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Link from 'next/link';
import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import { DataContext } from "../ContextApi/ContextApi";

const HandleSelect = () => {
    const {brand,setBrand}:DataType=useContext(DataContext)

  return (
     <div className='flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
          <div className='w-1/2 '><input type='text' className='w-5/6  focus:outline-none placeholder:text-slate-500 placeholder:text-sm ' placeholder='Search Product'/></div>
         <div className='mr-5 '></div>
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
    <Link href="/products/All" className='border-l pl-2'>
    <FiSearch size={20} />
    </Link>
     </div>

  )
}

export default HandleSelect