'use state'

type DataType={
  brand:string;
  name:string;
   productBrandData: string;
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
import { useContext, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { DataContext } from "../ContextApi/ContextApi";

const HandleSelect = () => {
  const {brand,handleBrandName,name,handleProductName}=useContext(DataContext)
  console.log(brand,name,'1111111111112222222222222222222233333333333333333333333333')
    // const [productNameData,setProductNameData]=useState(brand.brandName)
    // const [productBrandData,setProductBrandData]=useState(name.productName)




  return (
     <div className='flex items-center justify-center border gap-x-0 border-slate-200 rounded-sm py-1 px-2 '>
          <div className='w-[65%] '><input value={name.productName} onChange={(e)=>handleProductName(e.target.value)} className='w-full  focus:outline-none placeholder:text-black text-xs text-blackplaceholder:text-xs ' placeholder='Product Name' list="Names"/></div>
           <datalist id="Names">
           <option value="Women's BlackSweather">Women's BlackSweather</option>
           <option value="Women's Cable Cropped">Women's Cable Cropped</option>
           <option value="Women's White Sweather">Women's White Sweather</option>
           <option value="Maxi Dresses Casual">Maxi Dresses Casual</option>
           <option value="QACOHU">QACOHU</option>
           </datalist>
         <div className='mr-5 '></div>
    <Select value={brand.brandName} onValueChange={(e)=>handleBrandName(e)}>
      <SelectTrigger className="w-[120px] outline-none border-none shadow-none z-20  text-xs">
        <SelectValue className='placeholder:text-slate-500 placeholder:text-xs' placeholder="All" />
      </SelectTrigger>
      <SelectContent className='bg-white text-xs text-black'>
        <SelectGroup>
          {/* <SelectItem defaultValue='All' value="all">All</SelectItem> */}
          <SelectItem value="oukods">Oukods</SelectItem>
          <SelectItem value="tiger">Tiger</SelectItem>
          <SelectItem value="kirana">Kirana</SelectItem>
          <SelectItem value="prettygarden">Prettygarden</SelectItem>
          <SelectItem value="qualfort">Qualfort</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    {/* <div onClick={()=>handleSearch()} className='hover:cursor-pointer hover:text-blue-500 duration-500 border-l pl-2'>
    <FiSearch size={20} />
    </div> */}
     </div>

  )
}

export default HandleSelect