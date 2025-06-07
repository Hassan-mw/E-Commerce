
import { FaCartArrowDown } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import Link from 'next/link';
import { useContext, useEffect, useState } from "react";

import { TfiPackage } from "react-icons/tfi";
import { DataContext } from "../../ContextApi/ContextApi";
import { getAllCarts } from "../../API/Post/CreatePorduct";
import { getAllOrdes } from "../../API/GET/Order";
import { getAllFavourites } from "../../API/GET/Favourite";
const BottomRight = () => {
  const [cartLengths,setCartLength]=useState(0)
  const [orderLengths,setOrderLength]=useState(0)
  const [favouriteLengths,setFavouriteLength]=useState(0)
  const {cartLength,orderLength,favouriteLength}=useContext(DataContext)


   useEffect(()=>{
    const fetchData=async()=>{
    const cartData=await  getAllCarts()
    const orderData=await  getAllOrdes()
    const favouriteData=await  getAllFavourites()
    setCartLength(cartData.length)
    setOrderLength(orderData.length)
    setFavouriteLength(favouriteData.length)
    // console.log(cartlength,orderlength)
    } 
   fetchData();
   
   },[cartLength,orderLength,favouriteLength])  
  
  return (
    <div className='w-full flex items-center justify-end gap-x-3 sm:gap-x-6 xl:gap-x-12 text-white'>
    <Link href="/authentication" className='flex-center gap-x-2 hover:cursor-pointer lg:text-xl xl:text-sm xl:border-b border-[#262626] hover:text-blue-500 xl:hover:text-white lg:hover:border-[#39FF14] duration-700 text-gray-600 lg:text-white text-lg'><MdPerson /><span className="hidden xl:block">Authentication</span></Link>
    {/* <Link href="/favourite" className='flex-center gap-x-2 hover:cursor-pointer  xl:text-sm  text-gray-600  duration-700 hover:text-blue-500 xl:hover:text-white  xl:border-b border-[#262626] lg:hover:border-[#39FF14] lg:text-white text-lg '><GoHeart /> <span  className="hidden xl:block">Favourites</span></Link> */}
    <Link href='/favourite' className='flex-center gap-x-2 hover:cursor-pointer  xl:text-sm duration-700 hover:text-blue-500 xl:hover:text-white xl:border-b border-[#262626] lg:hover:border-[#39FF14] text-gray-600 lg:text-white text-lg '><GoHeart  />  <span className="hidden xl:block">Favourites</span>{favouriteLengths>0 && <div className='size-5 text-xs rounded-full flex-center  bg-green-400 text-white'>{favouriteLengths}</div>}</Link>
    <Link href='/cart' className='flex-center gap-x-2 hover:cursor-pointer  xl:text-sm duration-700 hover:text-blue-500 xl:hover:text-white xl:border-b border-[#262626] lg:hover:border-[#39FF14] text-gray-600 lg:text-white text-lg '><FaCartArrowDown  />  <span className="hidden xl:block">Card</span>{cartLengths>0 && <div className='size-5 text-xs rounded-full flex-center  bg-green-400 text-white'>{cartLengths}</div>}</Link>
    <Link href='/order' className='flex-center gap-x-2 hover:cursor-pointer  xl:text-sm duration-700 hover:text-blue-500 xl:hover:text-white xl:border-b border-[#262626] lg:hover:border-[#39FF14] text-gray-600 lg:text-white text-lg '><TfiPackage  />  <span className="hidden xl:block">Order</span>{orderLengths>0 && <div className='size-5 text-xs rounded-full flex-center   bg-green-400 text-white'>{orderLengths}</div>}</Link>
    {/* <Link href='/order' className='flex-center gap-x-2 hover:cursor-pointer   xl:text-sm duration-700 hover:text-blue-500 xl:hover:text-white xl:border-b border-[#262626] lg:hover:border-[#39FF14] text-gray-600 lg:text-white text-lg '><TfiPackage /><span  className="hidden xl:block">Order</span>  </Link> */}
</div>
  )
}

export default BottomRight

//  const [cartLengths,setCartLength]=useState(0)
//   const [orderLengths,setOrderLength]=useState(0)
//     //  const {cartLength,orderLength}=useContext(DataContext)
//    useEffect(()=>{
//     const fetchData=async()=>{
//     const cartlength=await  getAllCarts()
//     const orderlength=await  getAllOrdes()
//     setCartLength(cartlength.length)
//     setOrderLength(orderlength.length)
//     // console.log(cartlength,orderlength)
//     } 
//    fetchData();
   
//    },[])  
  