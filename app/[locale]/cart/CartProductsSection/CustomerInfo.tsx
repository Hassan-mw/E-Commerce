'use client';

import { useState } from "react";

const CustomerInfo = () => {
  const [information,setInformetion]=useState({email:"",firstName:"",lastName:"",country:"",state:"",address:"",phone:""})
   
 console.log(information)
  function handleChange(e:any){
 
 const {name,value}=e.target;
 setInformetion((pre)=>({...pre,[name]:value}))
  }
  return (


    <div className='w-full flex flex-col space-y-12 px-14'>

    <div className='w-full flex flex-col space-y-4 '>
     <div className='tex-xl font-semibold'>Customer Information</div>
     {/* Email */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>E-mail</div>
     <input name="email" value={information.email} onChange={(e)=>handleChange(e)}  type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

     {/* First Name - Last Name */}
     <div className='flex items-center justify-center gap-x-3'>

       {/* First-Name */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>First-Name</div>
     <input name="firstName" value={information.firstName} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

      {/* Last-Name */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Last-Name</div>
     <input name="lastName" value={information.lastName} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

     </div>


    </div>
    
    <div className='w-full flex flex-col space-y-4'>
     <div className='tex-xl font-semibold'>Shipping Address</div>
     {/* Country */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Country</div>
     <select name="country" value={information.country} onChange={(e)=>handleChange(e)} className='border border-[#D9D9D9] focus:outline-none text-[#555555] w-full rounded-sm p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>

     {/* State/Region */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>State/Region</div>
     <select name="state" value={information.state} onChange={(e)=>handleChange(e)} className='border border-[#D9D9D9] focus:outline-none text-[#555555] w-full rounded-sm p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>


     {/* Address */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Address</div>
     <input name="address" value={information.address} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

     {/* Phone Number */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'> Phone Number </div>
     <input name="phone" value={information.phone} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>


    </div>

    </div>
  )
}

export default CustomerInfo