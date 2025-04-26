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
    <div className='w-full flex items-center justify-end'>

    <Select >
    <SelectTrigger className="w-[150px]">
      <SelectValue placeholder="Sort by order" />
    </SelectTrigger>
    <SelectContent className='border-[#7B7B7B] outline-[#7B7B7B]'>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
  </div>
  
  )
}

export default SortingBy