'use state'

import { useContext, useEffect, useState } from 'react';
import { DataContext } from "../../ContextApi/ContextApi";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const HandleSelect = () => {
  const {brand,handleBrandName,name,handleProductName}=useContext(DataContext)


  return (
  <div className='w-full max-w-[70%]  flex items-center justify-center border gap-x-0 border-slate-200 bg-red-500 rounded-sm py-1 px-2 '>
        
    <div className='w-[65%] '><input value={name.productName} onChange={(e)=>handleProductName(e.target.value)} className='w-full  focus:outline-none placeholder:text-black text-xs text-blackplaceholder:text-xs ' placeholder='Product Name' list="Names"/></div>
       
      {/* 1_cloths_name_selected */}
      <datalist id="Names">
      <option value="Women's BlackSweather">Women's BlackSweather</option>
      <option value="Women's Cable Cropped">Women's Cable Cropped</option>
      <option value="Women's White Sweather">Women's White Sweather</option>
      <option value="Maxi Dresses Casual">Maxi Dresses Casual</option>
      <option value="QACOHU">QACOHU</option>
      </datalist>
       
      {/* 2_Space */}
      <div className='mr-5 '> </div>
      
      {/* 3_Select_cloths_brand */}
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
   

  </div>

  )
}

export default HandleSelect