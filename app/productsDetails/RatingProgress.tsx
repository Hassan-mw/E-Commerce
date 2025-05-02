import React from 'react'

const RatingProgress = ({precent}:{precent:string}) => {
  return (
    <div className='w-full bg-[#D9D9D9] h-3 rounded-md'> 
    <div className={`w-[${precent}%] bg-[#4172DC] h-3 rounded-md`}> 
     
    </div>
    </div>
  )
}

export default RatingProgress