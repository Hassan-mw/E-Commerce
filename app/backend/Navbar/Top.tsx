import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

const Top = () => {
  return (
    <div className='w-full flex items-center justify-center'>

    <div className='w-full max-w-screen-2xl flex md:flex-col md:space-y-4 xl:spacce-y-0 xl:flex-row items-center justify-center px-10 '>
   <TopLeft/>
   <TopRight/>
    
    </div>
    </div>
  )
}

export default Top