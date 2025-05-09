import React from 'react'
import TotalReviews from './TotalReviews'
import AllReviewsColoums from './AllReviewsColoums'

const ReviewDetail = () => {
  return (
    <div className='w-full border-t  border-[#D9D9D9]  flex flex-col space-y-14 p-5'>
      <TotalReviews/>
       <AllReviewsColoums/>
       <div className='w-full h-full grid grid-cols-5 justify-start gap-x-4 bg-red-400'>
   {/* Large_image */}
     <Image height={600} width={600} className='w-full h-full object-contain col-span-3' src="/blog_below_large_image.png" alt="blog_below_large_image" />  
   
   {/* 3_small_iamge */}
   <div className='w-full h-full bg-green-500  grid-cols-3 md:grid-cols-1 col-span-2  gap-4 p-3'>
   <Image height={300} width={300} className='w-full h-full object-contain' src="/blog_below_small_image_1.png" alt=" blog_below_small_image_1" />  
   {/* <Image height={300} width={300} className='w-full object-contain' src="/blog_below_small_image_2.png" alt=" blog_below_small_image_2" />   */}
   {/* <Image height={300} width={300} className='w-full object-contain' src="/blog_below_small_image_3.png" alt=" blog_below_small_image_3" />   */}
   </div>
    </div>
    </div>
  )
}

export default ReviewDetail