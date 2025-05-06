import { Jost } from 'next/font/google'
import React from 'react'
import { Progress } from "@/components/ui/progress"
import RatingProgress from './RatingProgress'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TotalReviews = () => {
   const dataReviews=
    {totalReviews:23,fiveStares:8,fourStar:5,threeStar:2,twoStar:5,oneStar:3}
    
    const fiveStarRating=((dataReviews.fiveStares/dataReviews.totalReviews)*100).toFixed(0)
    const fourStarRating=((dataReviews.fourStar/dataReviews.totalReviews)*100).toFixed(0)
    const threeStarRating=((dataReviews.threeStar/dataReviews.totalReviews)*100).toFixed(0)
    const twoStarRating=((dataReviews.twoStar/dataReviews.totalReviews)*100).toFixed(0)
    const oneStarRating=((dataReviews.oneStar/dataReviews.totalReviews)*100).toFixed(0)
    const sumReviews=dataReviews.fiveStares+dataReviews.fourStar+dataReviews.threeStar+dataReviews.twoStar+dataReviews.oneStar
    const avgRating=(dataReviews.totalReviews/5)
    console.log(fiveStarRating,fourStarRating,threeStarRating)

    function calculatingRating(rating:number){
      return  ((rating/dataReviews.totalReviews)*100).toFixed(0)+'%'
    }

//  console.log(calculatingRating(22),'....fmghlahkldahdhht')

  return (
    <div className='w-full  flex  items-center justify-center'>
    <div className='w-full max-w-screen-xl flex flex-col items-start justify-center sm:justify-between sm:flex-row  gap-y-6 md:ap-x-5 '>
        {/* review-text */}
        <div className={`w-full flex flex-col items-start justify-start  gap-y-1 space-y-2`}>
        <div className={`${jost.className} text-xl lg:text-2xl text-[#262626]`}>Total review rate</div>
        <div style={{fontWeight:400}} className={`${jost.className} text-sm text-[#555555] `}>Average rating ({avgRating} {fourStarRating} Reviews & {sumReviews} ratings) </div>
         <div  style={{fontWeight:300}}  className='flex items-center justify-start gap-x-5'><span>⭐⭐⭐</span><span className={`${jost.className} text-md text-[#555555] `}>4.8/5</span></div>
        </div>
        {/* review-radio */}
        <div className='w-full flex flex-col  space-y-2'>
          {/* 1 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>5</span> <span>Stars</span></div>
        <RatingProgress precent={calculatingRating(dataReviews.fiveStares)} />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>{calculatingRating(dataReviews.fiveStares)}</span> <span>%</span></div>

        </div>
          {/* 2 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>4</span> <span>Stars</span></div>
        <RatingProgress precent={calculatingRating(dataReviews.fourStar)} />

        {/* <div className='w-full bg-[#D9D9D9] h-3 rounded-md'> 
       <div className={`w-[${calculatingRating(dataReviews.fourStar)}%] bg-[#4172DC] h-3 rounded-md`}> 
     
       </div>
      </div> */}
         <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>{calculatingRating(dataReviews.fourStar)}</span> <span>%</span></div>

        </div>
          {/* 3 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>3</span> <span>Stars</span></div>
        <RatingProgress  precent={calculatingRating(dataReviews.threeStar)} />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>{calculatingRating(dataReviews.threeStar)}</span> <span>%</span></div>

        </div>
          {/* 4 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>1</span> <span>Stars</span></div>
        <RatingProgress  precent={calculatingRating(dataReviews.twoStar)}/>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>{calculatingRating(dataReviews.twoStar)}</span> <span>%</span></div>

        </div>
          {/* 5 */}
       <div className='  flex items-center justify-center space-x-2'>
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>5</span> <span>Stars</span></div>
        <RatingProgress  precent={calculatingRating(dataReviews.oneStar)} />
        <div className={`${jost.className} flex items-center justify-center gap-x-1 text-sm`}><span>{calculatingRating(dataReviews.oneStar)}</span> <span>%</span></div>

        </div>


        </div>
        
    </div>
    </div>
  )
}

export default TotalReviews