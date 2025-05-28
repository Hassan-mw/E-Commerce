import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'


const Top = () => {
  return (
    <div className='w-full flex items-center justify-center'>

    <div className='w-full max-w-screen-2xl flex lg:flex-col lg:space-y-4 xl:spacce-y-0 xl:space-x-25 2xl:gap-x-40 xl:flex-row items-center justify-center px-10 '>
   <TopLeft/>
   <TopRight/>
    
    </div>
    </div>
  )
}

export default Top