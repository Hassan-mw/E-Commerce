import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

const Top = () => {
  return (
    <div className='w-full flex items-center justify-center'>

    <div className='w-full max-w-screen-2xl flex items-center justify-center '>
   <TopLeft/>
   <TopRight/>
    
    </div>
    </div>
  )
}

export default Top