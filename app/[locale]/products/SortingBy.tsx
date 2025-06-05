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
     <Select value={sort} onValueChange={(e)=>setSort(e)}>
      <SelectTrigger className="w-[120px] outline-none border-none shadow-none z-20  text-xs">
        <SelectValue className='placeholder:text-slate-500 placeholder:text-xs' placeholder="All" />
      </SelectTrigger>
      <SelectContent className='bg-white text-xs text-black'>
        <SelectContent className='bg-white'>
      <SelectItem defaultValue="none" value="none">None</SelectItem>
      <SelectItem value="price">Price</SelectItem>
      <SelectItem value="rating">Rating</SelectItem>
      <SelectItem value="discount">Discount</SelectItem>
    </SelectContent>
      </SelectContent>
    </Select>
    {/* <Select value={sort} onValueChange={(e)=>setSort(e)} >
    <SelectTrigger className="w-[140px] hover:cursor-pointer outline-slate-200 placeholder:text-[#7B7B7B] border-[#7B7B7B] ">
      <SelectValue  placeholder="Sort by order" />
    </SelectTrigger>
    <SelectContent className='bg-white'>
      <SelectItem defaultValue="none" value="none">None</SelectItem>
      <SelectItem value="price">Price</SelectItem>
      <SelectItem value="rating">Rating</SelectItem>
      <SelectItem value="discount">Discount</SelectItem>
    </SelectContent>
  </Select> */}
  </div>
  
  )
}

export default SortingBy