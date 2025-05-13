'use client'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
  
const SortingBy = () => {
    const [sort,setSort]=useState('none')
    
    const searchParams=useSearchParams()
    const pathName=usePathname()
    const router=useRouter()
   
  
    useEffect(()=>{
      const params=new URLSearchParams(searchParams)
  
      if(sort!=='none')  params.set('sort',sort); else params.delete('sort');
    
      router.replace(`${pathName}?${params.toString()}`,{scroll:false})
  
    },[sort])
  
  return (
    <div className='w-full flex items-end  justify-end xl:pr-16'>

    <Select value={sort} onValueChange={(e)=>setSort(e)} >
    <SelectTrigger className="w-[140px] hover:cursor-pointer  placeholder:text-[#7B7B7B] border-[#7B7B7B] outline-[#7B7B7B]">
      <SelectValue  placeholder="Sort by order" />
    </SelectTrigger>
    <SelectContent className='bg-white'>
      <SelectItem defaultValue="none" value="none">None</SelectItem>
      <SelectItem value="price">Price</SelectItem>
      <SelectItem value="rating">Rating</SelectItem>
      <SelectItem value="discount">Discount</SelectItem>
    </SelectContent>
  </Select>
  </div>
  
  )
}

export default SortingBy