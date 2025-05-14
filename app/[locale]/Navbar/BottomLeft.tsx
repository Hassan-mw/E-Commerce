import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React, { useContext, useState } from 'react'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FiSearch } from "react-icons/fi";
import {   usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { DataContext } from "../ContextApi/ContextApi";

const BottomLeft = () => {
   const locale = useLocale();
       const router = useRouter();
       const pathname = usePathname();
       const params = useParams();
       const {currentCurrency,setCurrentCurrency}=useContext(DataContext)

     function onSelectChange(nextLocale: string){

    router.replace(
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  const handleCurrentCurrency=(data:string)=>{
   setCurrentCurrency(data)
  }

  return (
    <div className='w-full flex items-center justify-start gap-x-6 '>
    <div className='flex items-center justify-center gap-x-3'><Image height={20} width={20} src="/category_iamge.png" alt="logo" /><span className={`${jost.className} text-white text-2xl`}>Categories</span></div>
    <div className='flex items-center justify-center text-white '>
  
     <div className=' '>
      <Select defaultValue={locale} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[100px] outline-none border-none shadow-none z-20 ">
        <SelectValue placeholder="USD" />
      </SelectTrigger>
      <SelectContent  className="bg-white border-none py-3">
        <SelectGroup>
         {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    
     
       <Select defaultValue={currentCurrency} onValueChange={handleCurrentCurrency}>
      <SelectTrigger className="w-[100px]  outline-none border-none shadow-none z-20 ">
        <SelectValue placeholder="USD" />
      </SelectTrigger>
      <SelectContent  className="bg-white border-none py-3">
        <SelectGroup>
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="PKR">PKR</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    
    
</div>
  )
}

export default BottomLeft