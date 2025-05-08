import { Jost } from 'next/font/google'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const TextData = () => {
 
  

  return (
    <div className='w-full flex  items-center justify-center'> 
    <div className='w-full max-w-screen-lg flex flex-col space-y-4 '>
     <div className={`${jost.className}  text-2xl text-[#262626] `}>"Unveiling Timeless Elegance: Exploring the Allure of Vintage Fashion"</div>
  
      <div className='flex flex-col items-start justify-start space-y-1 '>
  
      <div className={`${jost.className} text-sm text-[#262626]`}>The Essence of Time Travel</div>
      <div style={{fontWeight:300}} className={`${jost.className} text-xs text-[#707377]`}>Vintage fashion allows us to transcend eras, stepping into the shoes of those who came before us. Each piece tells a story, offering a glimpse into the cultural and societal norms of its time. From the flapper dresses of the 1920s that embodied the spirit of rebellion to the tailored suits of the 1960s that epitomized sophistication, every era has its signature style waiting to be revived.</div>
      </div>
    </div>
    </div>
  )
}

export default TextData