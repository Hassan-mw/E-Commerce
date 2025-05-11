'use state'
import React, { useContext } from 'react'
import { DataContext } from '../ContextApi/ContextApi'


type DataType={
  brand:string;
}

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const HandleSelect = () => {
    const {brand,setBrand}:DataType=useContext(DataContext)

  return (
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
    </Select>
  )
}

export default HandleSelect