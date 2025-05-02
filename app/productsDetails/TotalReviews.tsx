import { Jost } from 'next/font/google'
import React from 'react'
import { Progress } from "@/components/ui/progress"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TotalReviews = () => {
  return (
    <div className='w-full flex  space-y-5'>
        {/* review-text */}
        <div className={`flex flex-col space-y-2`}>
        <div className={`${jost.className} text-xl `}> Total review rate  </div>
        <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#555555] `}>Average rating (10 Reviews & 125 ratings) </div>
         <div  style={{fontWeight:300}}  className='flex items-center justify-start gap-x-5'><span>⭐⭐⭐</span><span className={`${jost.className} text-md text-[#555555] `}>4.8/5</span></div>
        </div>
        {/* review-radio */}
        <div className='w-full flex flex-col space-y-2'>
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} text-sm`}>5 Stars</div>
        <RatingProgress/>
        <div className='bg-slate-500'><Progress className='bg-green-500 w-[66%]' value={44} /></div>
        <div className={`${jost.className} text-sm`}>74 %</div>
        </div>
        </div>
        
    </div>
  )
}

export default TotalReviews