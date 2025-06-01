import Image from 'next/image'
import React, { useState } from 'react'

const Login = () => {
  const [a,setA]=useState('')
  return (
    <div className='w-full flex flex-col items-start justify-start space-y-3 '>
     <h1>Login</h1>

     {/* Email */}
     <div className='flex flex-col space-y-1'>
      <h2>Email</h2>
      <input type='text' required className='focus:outline-none p-2 rounded-md border border-gray-200' /> 
     </div>


    {/* Password */}
    <div className='flex flex-col space-y-1'>
    <h2>Password</h2>
    <input type='number' required className='focus:outline-none p-2 rounded-md border border-gray-200' /> 
    </div>

    {/*Signup-Button  */}
    <div className='w-full rounded-md Data_Center p-3 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer duration-500 text-white'>SIGN IN</div>
   
    {/* Or */}
    <div className='flex items-center justify-center gap-x-3 w-full'>
    <span className='border-t '></span>
     <span className='text-gray-200'> OR</span>
    <span className='border-t '></span>
    </div> 

    {/*Signup-Button-Google  */}
    <div className='w-full rounded-md Data_Center p-3  text-white bg-[#434343]'><Image height={15} width={15} src="/google_logo_signin.png" alt='google_logo'/> <span>sign in by google</span></div>
    </div>
  )
}

export default Login