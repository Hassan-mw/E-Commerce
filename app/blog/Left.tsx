import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

const Left = () => {
  return (
    <div className='w-full grid grid-cols-4 bg-sky-400 sm:bg-purple-500 gap-x-1 '>
     <TopLeft/>
     <TopRight/>

    </div>
  )
}

export default Left