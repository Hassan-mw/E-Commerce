import React from 'react'

const RatingProgress = ({precent}:{precent:string}) => {
  console.log((precent))
  let x='12%';
  return (
    <div className='w-full bg-[#D9D9D9] h-3 rounded-md'> 
    <div className={`max-w-[${(x)}]  bg-[#4172DC] h-3 rounded-md`}> 
     
    </div>
    </div>
  )
}

export default RatingProgress