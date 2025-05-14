import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'



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

const BottomLeft = () => {
   const locale = useLocale();
console.log(locale,12345678,routing)
       const router = useRouter();
       const pathname = usePathname();
       const params = useParams();
  function onSelectChange(nextLocale: string){

    router.replace(
      { pathname, params },
      { locale: nextLocale as Locale }
    );
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
      <SelectContent>
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
    
     <div className=' '><Select>
      <SelectTrigger className="w-[100px] outline-none border-none shadow-none z-20 ">
        <SelectValue placeholder="USD" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
    
    </div>
</div>
  )
}

export default BottomLeft