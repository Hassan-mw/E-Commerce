'use client';

import axios from "axios";
import { useEffect, useState } from "react";

const CustomerInfo = () => {
  const [information,setInformetion]=useState({email:"",firstName:"",lastName:"",country:"",state:"",address:"",phone:""})
   const [status,setStatus]=useState('')   
   const [data,setData]=useState({})   
 console.log(data)

  //handles input  
  function handleChange(e:any){
    const {name,value}=e.target;
    console.log(name,value)
    if(status==='success'){
   setData((pre)=>({...pre,[name]:value}))

    }
 setInformetion((pre)=>({...pre,[name]:value}))
  }
    
  
  //Handle updating
  const handleFormChanges=async()=>{
  const x=await axios.put('http://localhost:5000/api/address/1',{
      email:data.email,
      firstName:data.firstName,
      lastName:data.lastName,
      country:data.country,
      state:data.state,
      address:data.address,
      phone:data.phone,
      
   })}

  //sending data
   const handleForm=async()=>{
    try{
    const data=await axios.post('http://localhost:5000/api/address',
      {
      email:information.email,
      firstName:information.firstName,
      lastName:information.lastName,
      country:information.country,
      state:information.state,
      address:information.address,
      phone:information.phone,
      
      }
     )}catch(err){
      console.log(err)
     }
  }

  //taking data
  useEffect(()=>{
    const fetchingAddress=async()=>{
    
    const response=await axios.get('http://localhost:5000/api/address/1')
    const {status,data}=response.data
  console.log(status,data)
    setStatus(status)
    setData(data)


  
    }
  fetchingAddress()
  },[])

  return (


    <div className='w-full flex flex-col space-y-12 px-14'>
    {/* {useraddress.status==='success' ?
       <div>You not login</div>:
    <> */}
    <div className='w-full flex flex-col space-y-4 '>
     <div className='tex-xl font-semibold'>Customer Information</div>
     {/* Email */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>E-mail</div>
     <input required name="email" value={status==='success'?data.email :information.email} onChange={(e)=>handleChange(e)}  type='text'  className='border w-full rounded-xs p-1 text-[#555555]' />
     </div>

     {/* First Name - Last Name */}
     <div className='flex items-center justify-center gap-x-3'>

       {/* First-Name */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>First-Name</div>
     <input name="firstName" value={status==='success'?data.firstname :information.firstName} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-xs p-1 text-[#555555]' />
     </div>

      {/* Last-Name */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Last-Name</div>
     <input name="lastName" value={status==='success'?data.lastname :information.lastName} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-xs p-1 text-[#555555]' />
     </div>

     </div>


    </div>
    
    <div className='w-full flex flex-col space-y-4'>
     <div className='tex-xl font-semibold'>Shipping Address</div>
     {/* Country */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Country</div>
     <select name="country" value={status==='success'?data.country :information.country} onChange={(e)=>handleChange(e)} className='border border-[#555555] focus:outline-none text-[#555555] w-full rounded-xs p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>

     {/* State/Region */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>State/Region</div>
     <select name="state" value={status==='success'?data.state :information.state} onChange={(e)=>handleChange(e)} className='border border-[#555555] focus:outline-none text-[#555555] w-full rounded-xs p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>


     {/* Address */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Address</div>
     <input name="address" value={status==='success'?data.address :information.address} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-xs p-1 text-[#555555]' />
     </div>

     {/* Phone Number */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'> Phone Number </div>
     <input name="phone" value={status==='success'?data.phone :information.phone} onChange={(e)=>handleChange(e)} type='text'  className='border w-full rounded-xs p-1 text-[#555555]' />
     </div>


    </div>
     
     {
     status==='success'?
     <div className="w-full flex items-center justify-center "><div onClick={handleFormChanges} className="w-36  flex items-center justify-center text-sm text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 duration-500 p-1 rounded-xl ">Submit Changes</div></div>
     
     :

     <div className="w-full flex items-center justify-center "><div onClick={handleForm} className="w-24  flex items-center justify-center text-sm text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 duration-500 p-1 rounded-xl ">Submit</div></div>
     }
    </div>
  )
}

export default CustomerInfo