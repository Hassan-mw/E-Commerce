'use client'

import { useState } from "react"
import Login from "./login"
import Signup from "./Signup"
import SmallScreenAuthentication from "./SmallScreenAuthentication"

const login = () => {
  const [currentPage,setCurrentPage]=useState('Login')
  return (
    <div className='Data_Center w-full p-5'>
   
     <SmallScreenAuthentication/>

    </div>
  )
}

export default login