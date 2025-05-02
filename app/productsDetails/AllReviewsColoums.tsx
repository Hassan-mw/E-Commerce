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
    {id:3,image:"user_1744831788917.jpeg",name:"Sam", comment:"I love this brand cloths.These are reliable,and they sustain for long term.",like:'5',disLikes:'2'},
    {id:4,image:"user_1744831788917.jpeg",name:"Sam", comment:"I love this brand cloths.These are reliable,and they sustain for long term.",like:'2',disLikes:'0'},
  ]
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-full max-w-screen-xl flex flex-col space-y-9 p-5'>
      {
        reviewData.map((data,index)=>
     
          <div key={data.id} className='flex flex-col space-y-3'>
            <div className='flex items-center justify-between '>
            <div className='flex items-center justify-start gap-x-4'>
              {/* image */}
              <Image height={150} width={150} className='rounded-full size-9 object-cover' src={`/${data.image}`} alt='Image' />
              {/* Name */}
              <div className={`${jost.className} text-2xl text-[39D9D9D]`}>{data.name}</div>
            </div>
            <LikeDislikeIcons like={data.like} disLike={data.disLikes}  />
            </div>
            {/* Review */}
            <div>{data.comment}</div>
          </div>
             )
      }
    </div>
    </div>
  )
}

export default AllReviewsColoums