import { LucideSend } from 'lucide-react'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import { PiPaypalLogoFill } from "react-icons/pi";
import { GrVisa } from "react-icons/gr";
import { SiVenmo } from "react-icons/si";
import { RiVisaLine } from 'react-icons/ri'


import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='w-full flex flex-col space-y-5 items-center justify-center pb-9  '>
      
       <div className='w-full flex  items-center justify-center bg-[#D1E2EB] py-10 '>
       <div className='w-full max-w-screen-lg space-y-18 flex flex-col items-center justify-center '>
       <div className='hidden md:block w-full gird place-items-center'>
       <div className='w-[60%] lg:w-1/2 bg-[#7296AB] text-white flex flex-col items-center justify-center space-y-2 p-4 rounded-md'>
        <div  className={`${jost.className} text-3xl `}>Luminae Store</div>
        <div style={{fontWeight:200}} className={` font-thin text-md pb-4`}>Reqister your email not to miss last minutes off+ Free delivery</div>
       <div className='w-full  flex items-center justify-center'>
      <div className='bg-white w-[70%] rounded-sm px-3 flex items-center justify-between py-1' >
    <div><input type='text' className='focus:outline-none text-black placeholder:text-[#9D9D9D] placeholder:text-sm' placeholder='Enter your email'/></div>
    <div className='text-black hover:cursor-pointer'><LucideSend size={18} /></div>
      </div>
       </div>
       </div>
       
        </div>

       
       <div className='w-full  grid grid-cols-2 lg:grid-cols-4 px-10 gap-5 place-items-center'>
        {/* //!    1 */}
         <div className='flex flex-col items-start justify-start md:items-center space-y-3 w-full '>
            <div className={`${jost.className} text-xl text-[#262626] pb-5`}>Company</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>About us</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Our Store</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Contact us</div>
         </div>
        
        {/* //!    3  */}
         <div className='flex flex-col items-start justify-start  md:items-center  space-y-3  w-full'>
            <div className={`${jost.className} text-xl text-[#262626] pb-5`}>How to Buy</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Making Payments </div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Deliveryy Options</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Buyer Protection</div>
            {/* <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>New User Guider</div> */}
         </div>
        {/* //!    4 */}
         <div className='flex flex-col items-start justify-start  md:items-center space-y-3  w-full'>
            <div className={`${jost.className} text-xl text-[#262626] pb-5`}>Help</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>FAQ</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Contact us </div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Privacy policy</div>
         </div>
         {/* //!    2 */}
         <div className='w-full flex flex-col items-start justify-center  md:items-center space-y-3  '>
            <div className={`${jost.className} text-xl text-[#262626] pb-5`}>Carrer Opportunities</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Selling Programs </div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Advertise</div>
            <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-xs `}>Cooperation</div>
         </div>
       </div>
    </div>
    </div>
    <div className='w-full  flex  items-center justify-center bg-white '>
    <div className='w-full max-w-screen-xl flex  flex-col space-y-3 p-3  '>
        {/* 1 */}
      <div className='w-full  pb-1 border-b-2 border-[#a1a1a1] flex items-center justify-between  '>
      <div className='flex items-center justify-center gap-x-3  opacity-100 text-[#555555] '>
        
      <RiVisaLine size={30}/>
        <SiVenmo size={40}/>
        <PiPaypalLogoFill />

      </div>
      <div className={`${jost.className} text-[#8a7f7f] text-sm`}>English</div>
      </div>
      {/* 2 */}
      <div className='w-full hidden lg:block'>
      <div className='w-full flex items-center justify-between'>
        <div className={`${jost.className} text-[#8a7f7f] text-sm`}>165-179 Forster Road City of Monash, Melbourne, Australia</div>
        <div className={`${jost.className} text-[#8a7f7f] text-sm`}>&copy; Copyright in reserved for lumine shop</div>
        <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center gap-x-4  text-[#b1afaf]`}>
        <span className='hover:cursor-pointer hover:text-blue-400 duration-500'> <FaFacebookF /></span>
        <span className='hover:cursor-pointer  hover:text-blue-400 duration-500'>  <RiInstagramFill /></span>
        <span className='hover:cursor-pointer  hover:text-blue-400 duration-500'>   <FaTwitter /></span>
            </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Footer