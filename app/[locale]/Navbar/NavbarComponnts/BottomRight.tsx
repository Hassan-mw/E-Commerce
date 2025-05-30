
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
    <div className='w-full flex items-center justify-end gap-x-6 xl:gap-x-12 text-white'>
    <div className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><MdPerson /><span className="hidden xl:block">Sign in</span></div>
    <div className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><GoHeart /> <span  className="hidden xl:block">Favourites</span></div>
    <Link href='/cart' className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><FaCartArrowDown  />  <span className="hidden xl:block">Card</span>{cartLength>0 && <div className='size-5 text-xs rounded-full flex items-center justify-center bg-green-400 text-white'>{cartLength}</div>}</Link>
    <Link href='/order' className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><TfiPackage /><span  className="hidden xl:block">Order</span>  </Link>
</div>
  )
}

export default BottomRight