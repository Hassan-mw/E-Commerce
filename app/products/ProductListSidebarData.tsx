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
    <div className='w-full lg:w-[70%] h-full  flex flex-col items-start justify-start  space-y-12 '> 
    <div className='flex  items-center justify-center gap-x-3 '><div><BiCategory size={22} /></div><div className={`${jost.className} text-xl`}>All Categores</div></div>
    
    
    {/* Search by brand  */}
    <div className='w-full flex flex-col space-y-2 border-b pb-10 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Brand</div>
    <div className='border w-full rounded-md  border-slate-400 p-2 flex items-center justify-between'><input type='text' className='focus:outline-none  placeholder:text-sm' placeholder='Search by brand '  /><span><IoSearchOutline /></span></div>
    </div>


    {/* Check box by model */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Brand</div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Shorts</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Mid-length</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Sweather</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Party Dresses</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Reqular Fit</span></div>
    </div>


    {/* Check box by Style */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Style</div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Casual</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Business casual</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Bohemian</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Zara</span></div>
    <div className=' w-full flex items-center justify-start gap-x-4'><input type='checkbox' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>Mango </span></div>
    </div>


    {/*  box by color */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Brand</div>
    <div className='w-full grid grid-cols-4 gap-x-3 gap-y-5'>
   <div className='size-6 rounded-full bg-green-500'></div>
   <div className='size-6 rounded-full bg-red-500'></div>
   <div className='size-6 rounded-full bg-blue-500'></div>
   <div className='size-6 rounded-full bg-yellow-500'></div>
   <div className='size-6 rounded-full bg-purple-500'></div>
   <div className='size-6 rounded-full bg-pink-500'></div>
   <div className='size-6 rounded-full border border-slate-30 bg-white'></div>
   <div className='size-6 rounded-full bg-black'></div>
    </div>
  
    </div>


    {/*  box by Size */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>COLOR</div>
    <div className='w-full grid grid-cols-4 gap-x-3 gap-y-5'>
<div className={`${jost.className} border border-slate-200 text-[#555555] hover:cursor-pointer hover:bg-[#D1E2EB] duration-200 flex items-center justify-center  px-2 py-1 rounded-sm`}>2XS</div>
<div className={`${jost.className} border border-slate-200 text-[#555555] flex items-center justify-center  px-2  py-1  rounded-sm`}>XS</div>
<div className={`${jost.className} border border-slate-200 text-[#555555] flex items-center justify-center  px-2 py-1  rounded-sm`}>S</div>
<div className={`${jost.className} border border-slate-200 text-[#555555] flex items-center justify-center  px-2 py-1  rounded-sm`}>M</div>
<div className={`${jost.className} border border-slate-200 text-[#555555] flex items-center justify-center  px-2 py-1  rounded-sm`}>L</div>
<div className={`${jost.className} border border-slate-200 text-[#555555] flex items-center justify-center  px-2  py-1 rounded-sm`}>XL</div>
<div className={`${jost.className} border border-slate-200 text-[#555555] flex items-center justify-center  px-2  py-1 rounded-sm`}>2XL</div>
<div className={`${jost.className} border border-slate-200 text-[#555555] flex items-center justify-center  px-2 py-1  rounded-sm`}>3XL</div>
   
    </div>
  
    </div>


    {/* Price */}
    <div className='w-full flex flex-col space-y-2  border-slate-300'>
    <div className={`${jost.className} text-xl`}>PRICE</div>
      <div className='w-full flex flex-col space-y-3'>
        <div><input type='range' min='0' max='600' className='w-full'/></div>

      </div>
  
    </div>



    </div>
  )
}

export default ProductListSidebarData