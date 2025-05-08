import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { RiMessage3Fill } from 'react-icons/ri'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const LeftBottom = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-3'>
     
     {/* 1 */}
     <div className='w-full h-full flex flex-col items-center justify-center space-y-1'>
      <Image height={300} width={300} src="/bottomleft_iamge_1.png" alt='bottomleft_iamge_1'  />
      <div className='flex flex-col items-start justify-start space-y-1'>
       <div className={`${jost.className}  text-xs text-[#FF7A00]` }>Fashion</div>
       <div className={`${jost.className}  text-md text-[#262626]` }>Stylish young man out in town</div>
       <div  className={`${jost.className}  text-[11px] text-[#555555]` }>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</div>
      </div>
      {/* Time-Message */}
      <div className='flex items-center justify-start gap-x-2 text-[9px] text-[#C4C4C4] w-full'> <div>3 hour age</div><div className='flex items-center justify-center gap-x-2  '><span><RiMessage3Fill /></span> <span>19</span></div>      </div>
      </div>

     {/* 2 */}
     <div className='w-full h-full flex flex-col items-center justify-center space-y-1'>
      <Image height={300} width={300} src="/bottomleft_iamge_1.png" alt='bottomleft_image_2'  />
      <div className='flex flex-col items-start justify-start space-y-1'>
       <div className={`${jost.className}  text-xs text-[#FF7A00]` }>Fashion</div>
       <div className={`${jost.className}  text-md text-[#262626]` }>Stylish young man out in town</div>
       <div  className={`${jost.className}  text-[11px] text-[#555555]` }>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</div>
      </div>
      {/* Time-Message */}
      <div className='flex items-center justify-start gap-x-2 text-[9px] text-[#C4C4C4] w-full'> <div>3 hour age</div><div className='flex items-center justify-center gap-x-2  '><span><RiMessage3Fill /></span> <span>19</span></div>      </div>
      </div>

     {/* 3 */}
     <div className='w-full h-full flex flex-col items-center justify-center space-y-1'>
      <Image height={300} width={300} src="/bottomleft_iamge_1.png" alt='bottomleft_iamge_1'  />
      <div className='flex flex-col items-start justify-start space-y-1'>
       <div className={`${jost.className}  text-xs text-[#FF7A00]` }>Fashion</div>
       <div className={`${jost.className}  text-md text-[#262626]` }>Stylish young man out in town</div>
       <div  className={`${jost.className}  text-[11px] text-[#555555]` }>In the heart of the bustling city, a stylish young man navigates the urban landscape with an air of contemporary confidence. His ensemble effortlessly captures the essence of city chic...</div>
      </div>
      {/* Time-Message */}
      <div className='flex items-center justify-start gap-x-2 text-[9px] text-[#C4C4C4] w-full'> <div>3 hour age</div><div className='flex items-center justify-center gap-x-2  '><span><RiMessage3Fill /></span> <span>19</span></div>      </div>
      </div>


 

    </div>
  )
}

export default LeftBottom