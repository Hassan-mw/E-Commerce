'use client'
import React, { useContext } from 'react'

import SmallScreen from './SmallScreen'
import LargeScreen from './LargeScreen'


const Navbar = () => {
  
  return (
    <div className='w-full   flex flex-col items-center justify-center pt-4 space-y-4 pb-3 lg:pb-0'>
    <LargeScreen/>
    <SmallScreen/>
    </div>
  )
}

export default Navbar