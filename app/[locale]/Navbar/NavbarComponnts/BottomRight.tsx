
import { FaCartArrowDown } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import Link from 'next/link';
import { useContext } from "react";

import { TfiPackage } from "react-icons/tfi";
import { DataContext } from "../../ContextApi/ContextApi";
const BottomRight = () => {
     const {cartLength}=useContext(DataContext)
  
  return (
    <div className='w-full flex items-center justify-end gap-x-3 sm:gap-x-6 xl:gap-x-12 text-white'>
    <Link href="/authentication" className='flex items-center justify-center gap-x-2 hover:cursor-pointer lg:text-xl xl:text-sm xl:border-b border-[#262626] hover:text-blue-500 xl:hover:text-white lg:hover:border-[#39FF14] duration-700 text-gray-600 lg:text-white text-lg'><MdPerson /><span className="hidden xl:block">Sign in</span></Link>
    <div className='flex items-center justify-center gap-x-2 hover:cursor-pointer  xl:text-sm  text-gray-600  duration-700 hover:text-blue-500 xl:hover:text-white  xl:border-b border-[#262626] lg:hover:border-[#39FF14] lg:text-white text-lg '><GoHeart /> <span  className="hidden xl:block">Favourites</span></div>
    <Link href='/cart' className='flex items-center justify-center gap-x-2 hover:cursor-pointer  xl:text-sm duration-700 hover:text-blue-500 xl:hover:text-white xl:border-b border-[#262626] lg:hover:border-[#39FF14] text-gray-600 lg:text-white text-lg '><FaCartArrowDown  />  <span className="hidden xl:block">Card</span>{cartLength>0 && <div className='size-5 text-xs rounded-full flex items-center justify-center bg-green-400 text-white'>{cartLength}</div>}</Link>
    <Link href='/order' className='flex items-center justify-center gap-x-2 hover:cursor-pointer   xl:text-sm duration-700 hover:text-blue-500 xl:hover:text-white xl:border-b border-[#262626] lg:hover:border-[#39FF14] text-gray-600 lg:text-white text-lg '><TfiPackage /><span  className="hidden xl:block">Order</span>  </Link>
</div>
  )
}

export default BottomRight