import { Jost } from 'next/font/google'
import React from 'react'
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
import { IoSearchOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

const ProductListSidebarData = () => {
  return (
    <div className='w-full lg:w-5/6 h-full  flex flex-col items-start justify-start  space-y-3 '> 
    <div className='flex  items-center justify-center gap-x-3 '><div><BiCategory size={22} /></div><div className={`${jost.className} text-xl`}>All Categores</div></div>
    {/* SEarch by brand  */}
    <div className='w-full flex flex-col space-y-2'>
    <div className={`${jost.className} text-xl`}>Brand</div>
    <div className='border w-full rounded-md border-slate-400 p-2 flex items-center justify-center'><input type='text' className='focus:outline-none  placeholder:text-sm' placeholder='Search by brand '  /><span><IoSearchOutline /></span></div>
    </div>
    </div>
  )
}

export default ProductListSidebarData