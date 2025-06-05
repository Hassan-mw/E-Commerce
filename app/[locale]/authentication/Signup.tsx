'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from "react-icons/fa";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const Signup = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [passwordType,setPasswordType]=useState(false)
  const [error,setError]=useState('')
  const date=new Date().toLocaleDateString();

 
  //  Show_password_chages
   const handlePasswordClick=()=>{
     setPasswordType(pre=>!pre)
     console.log('Its clicking')
   }

   //Sending_signup_data
   const handleSignUp=async()=>{
    try{

      const response=await axios.post('http://localhost:5000/api/signup',{
        name,email,password,created_at:date
      })
      toast.success(" Succesfully created account.Make sure to Login")

      // console.log(response)
      // if(response?.status===201){
      //   Cookies.set("jwt", response.data.token);

      // }
      console.log(response)
    }catch(err:{response:{data:{message:string}}}){
      setError(err?.response?.data?.message)
      console.log(err)
    }
   } 

   return (
     <div className='w-full flex flex-col items-start justify-start space-y-6 py-5 '>
      <h1 className='text-3xl font-semibold pb-5'>Signup</h1>
      <p className='text-red-400'>{error}</p>
      {/* Name */}
      <div className='w-full flex flex-col space-y-1'>
       <h2 style={{fontWeight:400}} className='text-md font-medium text-[#262626]'>Name</h2>
       <input value={name} onChange={(e)=>setName(e.target.value)} type='text' required   placeholder='Enter your name' className='w-full p-1 focus:outline-none placeholder:sm text-sm text-gray-600 placeholder:text-gray-600 rounded-md border border-gray-200' /> 
      </div>


      {/* Email */}
      <div className='w-full flex flex-col space-y-1'>
       <h2 style={{fontWeight:400}} className='text-md font-medium text-[#262626]'>Email</h2>
       <input value={email} onChange={(e)=>setEmail(e.target.value)} type='text' required   placeholder='Enter your email' className='w-full p-1 focus:outline-none placeholder:sm text-sm text-gray-600 placeholder:text-gray-600 rounded-md border border-gray-200' /> 
      </div>
 
 
     {/* Password */}
     <div className='w-full flex flex-col space-y-1'>
     <h2 style={{fontWeight:400}} className='text-md font-semibold text-[#262626]'>Password</h2>
     <div className='flex items-center justify-between rounded-md border border-gray-200  p-1'>
      <input value={password} onChange={(e)=>setPassword(e.target.value)}  type={passwordType ? 'text' : 'password'}  required placeholder='Enter your password' className='w-full placeholder:text-gray-600 focus:outline-none placeholder:sm text-sm text-gray-500  ' /> <span onClick={handlePasswordClick} className='text-[#C4C4C4] hover:cursor-pointer'>{(passwordType && password.length>0) ?<FaRegEyeSlash /> : <FaRegEye />  }</span></div>
     </div>
      
     {/*Terms  */}
     <div className='flex items-start justify-start gap-x-2'>
      <div className='t-2'><input  type='checkbox'/></div>
     <p className='text-sm text-[#262626]'>Terms and conditions agreement should start with an introduction that lets users know they’re reading a terms and conditions agreement</p>
     </div>

     {/*Signup-Button  */}
     <div onClick={handleSignUp} className='w-full rounded-md Data_Center p-3 bg-[#4172DC] hover:bg-blue-700 hover:cursor-pointer duration-500 text-white'>SIGN UP</div>
    
 
     
     </div>
   )
 }

export default Signup