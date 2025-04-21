import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Navbar = () => {
  return (
    <div className='w-full max-w-screen flex flex-col items-center justify-center py-6 space-y-4'>
     {/*//! Top  */}
     <Top/>
     {/*//! Bottom  */}
     <Bottom/>
    </div>
  )
}

export default Navbar