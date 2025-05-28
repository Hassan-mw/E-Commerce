'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    SheetFooter
  } from "@/components/ui/sheet"

import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { IoMdClose } from "react-icons/io";
import ProductListSidebarData from "./ProductListSidebarData";
import ProductSidebarLoading from "./ProductSidebarLoading"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



const ProductSideBarTrigger = () => {
  const [loading,setLoading]=useState(true)
  
    useEffect(()=>{
      setLoading(false)
    },[])
    
     if(loading){
      return(
     <div className="w-28 bg-gray-200 animate-pulse"></div>
      )
     }
  
  return (
    <div>
        <Sheet>
    <SheetTrigger className="text-blue-600 flex items-center space-x-3 hover:cursor-pointer"><MdMenu size={20} /> <div className={` font-bold`}>Show Sidebar</div></SheetTrigger>
    <SheetContent className="w-[360px] h-full overflow-y-auto bg-white">
      <SheetHeader className="w-full flex flex-col">
        <SheetTitle className=" w-full p-3">
        </SheetTitle>
        <SheetDescription>

        </SheetDescription>
      </SheetHeader>
      <SheetFooter className="w-full h-full flex flex-col p-6 ">
        {/* Data */}
        <ProductListSidebarData/>
  
          </SheetFooter>
    </SheetContent>
  </Sheet></div>
  )
}

export default ProductSideBarTrigger