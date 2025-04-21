import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'

const Bottom = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#262626] '>

    <div className='w-full max-w-screen-xl flex items-center justify-center py-2'>
   <BottomLeft/>
   <BottomRight/>
    
    </div>
    </div>
  )
}

export default Bottom