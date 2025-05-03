import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import LikeDislikeIcons from './LikeDislikeIcons'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
const AllReviewsColoums = () => {
  const reviewData=[
    {id:1,image:"user_1744831856658.jpeg",name:"Ryan", comment:"Good items i love that one",like:'10',disLikes:'1'},
    {id:2,image:"user_1744831788917.jpeg",name:"Sam", comment:"I love this brand cloths.These are reliable,and they sustain for long term.",like:'1',disLikes:'1'},
    {id:3,image:"user_1744831788917.jpeg",name:"Sam", comment:"I love this brand cloths.These are reliable,and they sustain for long tssgsdgs sdgsdg sat trgs gsd gsdgsgsg  gsdgerm.",like:'5',disLikes:'2'},
    {id:4,image:"person_1.jpeg",name:"Sam", comment:"I love this brand cloths.These are reliable,and they sustain for long term.",like:'2',disLikes:'0'},
  ]
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-full max-w-screen-xl flex flex-col space-y-9 '>
      {
        reviewData.map((data,index)=>
     
          <div key={data.id} className='flex flex-col space-y-3'>
            <div className='flex items-start justify-between '>
            <div className='flex items-start justify-start gap-x-4 '>
              {/* image */}
              <img className='rounded-full h-10 w-10 p-1 object-cover ' src={`/${data.image}`} alt='Image' />
              <div className='flex flex-col items-start justify-start pt-2'>
              {/* Name */}
            <div className='flex items-start justify-start gap-x-2'>
            <div style={{fontWeight:400}} className={`${jost.className} text-xs text-[#39D9D9D] pb-2`}>{data.name}</div>
            <div style={{fontWeight:200}} className={`${jost.className} text-[10px] text-[#767676]  `}>8 months age</div>
              </div>  
              {/* Review */}
              <div>{data.comment}</div>
              </div>
            </div>
            <div className=''> <LikeDislikeIcons like={data.like} disLike={data.disLikes}  /></div> 
            </div>
           
          </div>
             )
      }
    </div>
    </div>
  )
}

export default AllReviewsColoums