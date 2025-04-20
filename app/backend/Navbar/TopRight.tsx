import Image from 'next/image'
import React from 'react'

const TopRight = () => {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='flex items-center justify-center gap-x-3'><Image height={90} width={90} src="/Navbar_logo.png" alt="logo" /><span>Limunea</span></div>
</div>
  )
}

export default TopRight