import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Navbar = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center py-6'>
     {/*//! Top  */}
     <Top/>
     {/*//! Bottom  */}
     <Bottom/>
    </div>
  )
}

export default Navbar