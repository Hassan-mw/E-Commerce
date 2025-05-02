import { Jost } from 'next/font/google'
import React from 'react'
import { Progress } from "@/components/ui/progress"
import RatingProgress from './RatingProgress'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TotalReviews = () => {
  return (
    <div className='w-full  flex  items-center justify-center'>
    <div className='w-full max-w-2xl flex gap-x-5'>
        {/* review-text */}
        {/* <div className={`w-full flex flex-col space-y-2`}>
        <div className={`${jost.className} text-xl `}> Total review rate  </div>
        <div style={{fontWeight:400}} className={`${jost.className} text-sm text-[#555555] `}>Average rating (10 Reviews & 125 ratings) </div>
         <div  style={{fontWeight:300}}  className='flex items-center justify-start gap-x-5'><span>⭐⭐⭐</span><span className={`${jost.className} text-md text-[#555555] `}>4.8/5</span></div>
        </div> */}
        {/* review-radio */}
        <div className='w-full flex flex-col space-y-2'>
          {/* 1 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>5</span> <span>Stars</span></div>
        <RatingProgress precent="w-[20%]" />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>75</span> <span>%</span></div>

        </div>
          {/* 2 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>4</span> <span>Stars</span></div>
        <RatingProgress precent="w-[90%]" />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>90</span> <span>%</span></div>

        </div>
          {/* 3 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>3</span> <span>Stars</span></div>
        <RatingProgress precent="w-[35%]" />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>35</span> <span>%</span></div>

        </div>
          {/* 4 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>2</span> <span>Stars</span></div>
        <RatingProgress precent="w-[44%]" />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>44</span> <span>%</span></div>

        </div>
          {/* 5 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>5</span> <span>Stars</span></div>
        <RatingProgress precent="w-[20%]" />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>75</span> <span>%</span></div>

        </div>


        </div>
        
    </div>
    </div>
  )
}

export default TotalReviews