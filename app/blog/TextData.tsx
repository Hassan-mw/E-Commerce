import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const TextData = () => {
  return (
    <div className='w-full flex  items-center justify-center'>
    <div className='w-full max-w-screen-lg flex flex-col space-y-4'>
     <div className={`  text-2xl `}>"Unveiling Timeless Elegance: Exploring the Allure of Vintage Fashion"</div>
    </div>
    </div>
  )
}

export default TextData