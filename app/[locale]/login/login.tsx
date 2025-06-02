'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from "react-icons/fa";


const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [passwordType,setPasswordType]=useState(false)
  console.log(passwordType)


  const handlePasswordClick=()=>{
    setPasswordType(pre=>!pre)
    console.log('Its clicking')
  }
  return (
    <div className='w-full flex flex-col items-start justify-start space-y-6 py-5 lg:pr-15 border-gray-300  lg:border-r'>
     <h1 className='text-3xl font-semibold pb-5'>Login</h1>

     {/* Email */}
     <div className='w-full flex flex-col space-y-1'>
      <h2 className='text-md font-medium text-[#262626]'>Email</h2>
      <input type='text' required   placeholder='Enter your email' className='w-full p-1 focus:outline-none placeholder:sm text-sm text-gray-500 rounded-md border border-gray-200' /> 
     </div>


    {/* Password */}
    <div className='w-full flex flex-col space-y-1'>
    <h2 className='text-md font-semibold text-[#262626]'>Password</h2>
    <div className='flex items-center justify-between rounded-md border border-gray-200 p-1'><input value={password} onChange={(e)=>setPassword(e.target.value)}  type={passwordType ? 'text' : 'password'}  required placeholder='Enter your password' className='w-full  focus:outline-none placeholder:sm text-sm text-gray-500  ' /> <span onClick={handlePasswordClick} className='text-[#C4C4C4] hover:cursor-pointer'>{(passwordType && password.length>0) ?<FaRegEyeSlash /> : <FaRegEye />  }</span></div>
    </div>

    {/*Signin-Button  */}
    <div className='w-full rounded-md Data_Center p-3 bg-[#4172DC] hover:bg-blue-700 hover:cursor-pointer duration-500 text-white'>SIGN IN</div>
   
    {/* Or */}
    <div className='w-full flex items-center justify-center gap-x-3 '>
    <span className='w-1/2 border border-[#D9D9D9] '></span>
     <span className='text-[#9D9D9D] text-sm'> OR</span>
    <span className='w-1/2 border border-[#D9D9D9] '></span>
    </div> 

    {/*Signup-Button-Google  */}
    <div className='w-full rounded-md Data_Center p-3 gap-x-2 text-white bg-[#434343]'><Image height={20} width={20} src="/google_logo_signin.png" alt='google_logo'/> <span>sign in by google</span></div>
    </div>
  )
}

export default Login