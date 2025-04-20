import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-center'>
     {/*//! Top  */}
     <Top/>
     {/*//! Bottom  */}
     <Bottom/>
    </div>
  )
}

export default Navbar