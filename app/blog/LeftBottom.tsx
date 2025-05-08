import Image from 'next/image'
import React from 'react'

const LeftBottom = () => {
  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-3'>
     
     {/* 1 */}
     <div className='w-full h-full flex items-center justify-center'>
      <Image height={300} width={300} src="/bottomleft_iamge_1.png" alt='bottomleft_iamge_1'  />
      <div className='flex flex-col items-start justify-start space-y-2'>
       <div className={`  text-xs text-[#FF7A00]` }>Fashion</div>
      </div>
     </div>


    </div>
  )
}

export default LeftBottom