import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
const SortingBy = () => {
  return (
    <div className='w-full flex items-end  justify-end xl:pr-16'>

    <Select >
    <SelectTrigger className="w-[140px] hover:cursor-pointer  placeholder:text-[#7B7B7B] border-[#7B7B7B] outline-[#7B7B7B]">
      <SelectValue  placeholder="Sort by order" />
    </SelectTrigger>
    <SelectContent className='bg-white'>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
  </div>
  
  )
}

export default SortingBy