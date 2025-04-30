import React from 'react'
import TotalReviews from './TotalReviews'
import AllReviewsColoums from './AllReviewsColoums'

const ReviewDetail = () => {
  return (
    <div className='w-full flex flex-col space-y-3'>
      <TotalReviews/>
       <AllReviewsColoums/>

    </div>
  )
}

export default ReviewDetail