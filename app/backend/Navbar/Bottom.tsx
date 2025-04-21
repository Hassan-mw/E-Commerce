import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
import BottomMiddle from './BottomMiddle'

const Bottom = () => {
  return (
    <div className='w-full flex items-center justify-center bg-[#262626] '>

    <div className='w-full max-w-screen-2xl flex items-center justify-center py-2'>
   <BottomLeft/>
   <BottomMiddle/>
   <BottomRight/>
    </div>
    </div>
  )
}

export default Bottom