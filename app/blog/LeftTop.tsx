import React from 'react'
import TopLeft from './TopLeft'
import TopRight from './TopRight'

const LeftTop = () => {
  return (
    <div className='w-full grid grid-cols-4 gap-x-1 '>
     <TopLeft/>
     <TopRight/>

    </div>
  )
}

export default LeftTop