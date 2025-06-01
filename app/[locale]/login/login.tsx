import React from 'react'

const Login = () => {
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

    </div>
  )
}

export default Login