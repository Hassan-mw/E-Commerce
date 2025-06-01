'usec client'
import React, { useState } from 'react'
import Login from './login'
import Signup from './Signup'

const SmallScreenAuthentication = () => {
const [currentPage,setCurrentPage]=useState('Login')
    
  return (
    <div className='Data_Center  w-full   max-w-screen-xl '>
    <div className='Data_Center flex-col  space-y-3  w-full   max-w-screen-xl'>
     {currentPage==='Login' && <Login/>}
     {currentPage==='Signup' && <Signup/>}
    {currentPage==='Login' &&  <div  className='Data_Center gap-x-1'>Don't have an account? <h1 onClick={()=>setCurrentPage('Signup')} className='hover:cursor-pointer text-md font-semibold text-[#FF7A00]'>Sign up</h1> </div>}
    {currentPage==='Signup' &&  <div  className='Data_Center gap-x-1'>Have an account? <h1 onClick={()=>setCurrentPage('Login')} className='hover:cursor-pointer text-md font-semibold text-[#FF7A00]'>Login</h1> </div>}
    </div>
    </div>
  )
}

export default SmallScreenAuthentication