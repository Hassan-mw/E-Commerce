import React from 'react'

const Loading = () => {
  return (
 <div className='w-full flex flex-col space-y-6 '>
    {/* Top-Section */}
    <div className='w-full bg-gray-200'>
    <div className='w-full h-36 max-w-screen-2xl flex items-center justify-between py-3 px-1 sm:px-6 xl:px-5'>
    <div className="h-8 bg-gray-300 rounded" />
    <div className="h-8 bg-gray-300 rounded" />
    <div className="h-8 bg-gray-300 rounded" />
    </div>
    </div>

    {/* Array */}
    <div className={`  w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   sm:gap-7 lg:gap-x-14 py-9 sm:px-2`}>
    <div className="w-72 rounded-xl bg-white p-4 shadow-md animate-pulse space-y-3">
      {/* Image Skeleton */}
      <div className="h-72 bg-gray-300 rounded-lg" />

      {/* Title */}
      <div className="h-4 bg-gray-300 rounded w-3/4" />

      {/* Description */}
      <div className="h-3 bg-gray-300 rounded w-full" />
      <div className="h-3 bg-gray-300 rounded w-5/6" />

      {/* Rating */}
      <div className="flex items-center space-x-2">
        <div className="h-4 w-24 bg-gray-300 rounded" />
        <div className="h-4 w-10 bg-gray-300 rounded" />
      </div>

      {/* Price */}
      <div className="flex items-center space-x-3">
        <div className="h-4 w-10 bg-gray-300 rounded" />
        <div className="h-4 w-14 bg-gray-300 rounded" />
        <div className="h-4 w-10 bg-gray-300 rounded" />
      </div>
    </div>    
    </div>


    </div>
  )
}


export default Loading