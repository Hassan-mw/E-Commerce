import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
const AllReviewsColoums = () => {
  return (
    <div className='w-full flex flex-col space-y-9 '>
      {/* 1 */}
          <div className='flex flex-col space-y-3'>
            <div className='flex items-center justify-start gap-x-4'>
              {/* image */}
          <Image height={200} width={200} className='rounded-full size-12 object-cover' src="/user_1744831569443.jpeg" alt='Image' />
              {/* Name */}
              <div className={`${jost.className} text-2xl`}>Hassan</div>
            </div>
            {/* Review */}
            <div>The fabric used in this clothing line is of superior quality, providing a luxurious feel against the skin. It not only looks stunning but also feels incredibly comfortable to wear. The attention to detail in every stitch and seam is evident, making each piece a work of art.</div>
          </div>
    </div>
  )
}

export default AllReviewsColoums