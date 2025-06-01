'use client'

import { useState } from "react"
import Login from "./login"
import Signup from "./Signup"

const login = () => {
  const [currentPage,setCurrentPage]=useState('Login')
  return (
    <div className='Data_Center w-full p-5'>
    <div className='Data_Center  w-full   max-w-screen-xl bg-red-400'>
     {currentPage==='Login' && <Login/>}
     {currentPage==='Signup' && <Signup/>}
    </div>
    </div>
  )
}

export default login