'use state'

type DataType={
  brand:string,
  name:string
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
    const {name,setName}:DataType=useContext(DataContext)

  return (
     <div className='flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
          <div className='w-[65%] '><input value={name} onChange={(e)=>setName(e.target.value)} className='w-full  focus:outline-none placeholder:text-black text-xs text-blackplaceholder:text-xs ' placeholder='Product Name' list="Names"/></div>
           <datalist id="Names">
           <option value="Women's BlackSweather">Women's BlackSweather</option>
           <option value="Women's Cable Cropped">Women's Cable Cropped</option>
           <option value="Women's White Sweather">Women's White Sweather</option>
           <option value="Maxi Dresses Casual">Maxi Dresses Casual</option>
           <option value="QACOHU">QACOHU</option>
           </datalist>
         <div className='mr-5 '></div>
    <Select value={brand} onValueChange={(e)=>setBrand(e)}>
      <SelectTrigger className="w-[120px] outline-none border-none shadow-none z-20  text-xs">
        <SelectValue className='placeholder:text-slate-500 placeholder:text-xs' placeholder="Category" />
      </SelectTrigger>
      <SelectContent className='bg-white text-xs text-black'>
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