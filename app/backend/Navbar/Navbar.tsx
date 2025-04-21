import React from 'react'
import Top from './Top'
import Bottom from './Bottom'
import { MdMenu } from 'react-icons/md'
import Image from 'next/image'
import { Jost } from 'next/font/google'
import { FaCartArrowDown } from 'react-icons/fa6'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const Navbar = () => {
  return (
    <div className='w-full   flex flex-col items-center justify-center py-6 space-y-4'>
      <div className='hidden lg:block w-full '>
     {/*//! Top  */}
     <Top/>
     {/*//! Bottom  */}
     <Bottom/>
    </div>
    <div className='w-full lg:hidden '>
    <div className='w-full flex items-center justify-between px-5 sm:px-7 '>
    <MdMenu size={25} />
    <div className='flex items-center justify-center gap-x-3'><Image height={45} width={45} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></div>
    <div className='flex items-center justify-center gap-x-2'><FaCartArrowDown size={20}  /><span className='text-xl'>Card</span></div>
    
    </div>
    </div>
    </div>
  )
}

export default Navbar