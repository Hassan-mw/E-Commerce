import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { IoPerson } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
}) 


const AboutUsLogin = () => {
  return (
    <div className='w-full bg-[#262626] pb-8 p-4 rounded-sm gap-x-12 flex items-center justify-between  space-y-4 max-h-[400px]'>


    <div className='w-full   grid-cols-1 space-y-4'>

   <div style={{fontWeight:300}} className={`${jost.className} text-lg text-white`}>Tell us about your <span className='text-[#FFC94B]'>Concerns</span></div>
   
    {/* Name */}
    <div className='w-full flex flex-col items-start justify-start  space-y-2'>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs text-white`}>Your Name</div>
    <div className='border border-white rounded-sm flex items-center text-xs gap-x-3 justify-start w-full p-2 text-white '> <IoPerson /><input type='text' className='placeholder:text-white'  placeholder='Enter Your Name here' /></div>  
    </div>
   
    {/* Email */}
    <div className='w-full flex flex-col items-start justify-start  space-y-2'>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs text-white`}>Email</div>
    <div className='border border-white rounded-sm flex items-center text-xs gap-x-3 justify-start w-full p-2 text-white '> <MdOutlineMailOutline /><input type='text' className='placeholder:text-white'  placeholder='Enter Your Email here' /></div>  
    </div>
   
    {/* Description */}
    <div className='w-full flex flex-col items-start justify-start  space-y-2'>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs text-white`}>Description</div>
    <input className='h-16 w-full border text-xs placeholder:text-xs rounded-md p-3 text-white border-white placeholder:text-white flex items-start justify-start' placeholder='Tell us about your conserns' type="text"/>
    </div>
    
    {/* Button */}
    <div style={{fontWeight:300}} className={`${jost.className} rounded-md flex items-center text-xs p-3 justify-center w-full bg-[#4172DC] hover:bg-blue-600 hover:cursor-pointer duration-500 text-white`}> SEND</div>
    </div>

     <div className='w-full hidden md:pt-4  sm:block '>
     <Image  height={500} width={500} className='w-full h-full rounded-md object-cover max-h-[380px] object-top' src="/aboutus_loginpage_sideimage.png" alt="aboutus_loginpage_sideimage"/>
     </div>

    </div>
  )
}

export default AboutUsLogin