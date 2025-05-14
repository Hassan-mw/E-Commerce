import Button from '@/components/Button'
import { Jost } from 'next/font/google'
import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { PiBasketThin } from 'react-icons/pi'
import { ProductDetailsDataType } from '../Types/dataType'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TopDataHandler = ({name,price,color,quantity,size}:ProductDetailsDataType) => {
  
  function handleCart(){

    
  }
  
  return (
    <div className='w-full flex flex-col space-y-4 px-5'>
  {/* Name + Price */}
 <div className='flex flex-col items-start justify-start w-full spce-y-2'>
    <div style={{fontWeight:500}} className={`${jost.className} text-xl text-[#262626] `}>{name}</div>
    <div style={{fontWeight:500}} className={` text-lg `}>${price}.99</div>
 </div>

 {/* Size */}
 <div className='flex flex-col spce-y-2'>
    <div className={`${jost.className} flex items-center justify-start gap-x-8 `}>
        <span style={{fontWeight:200}} className={`${jost.className} text-sm text-[#262626] min-w-14`}>size</span>
        <div className={`${jost.className} flex items-center justify-center gap-x-3 `}> 
        <span style={{fontWeight:200}} className={`${jost.className} border rounded-sm border-slate-200 px-3 py-0.5 text-[#555555] text-xs`}>{size}</span>
        </div>
        </div>

 </div>

 {/* color */}
 <div className='flex flex-col spce-y-2'>
    <div className={`${jost.className} flex items-center justify-start gap-x-8 `}>
        <span style={{fontWeight:200}} className={`${jost.className} text-sm text-[#262626] min-w-14`}>color</span>
        
        <div className={`${jost.className} flex items-center justify-center border gap-x-3 `}> 
        <span  className={`size-3 rounded-full ${color!=='black' || 'white' ? ` bg-${color}-600` : `bg-${color}`  } `} ></span>    
 
       
      
        </div>
        </div>
   
 </div>

 {/* shipping */}
 <div className='flex flex-col items-start spce-y-2 '>
  <div className={`${jost.className} flex items-start justify-start gap-x-8 `}>
  <span style={{fontWeight:200}} className={`${jost.className} text-sm text-[#262626] min-w-14 `}>Shipping</span>  
  <div className={`flex flex-col  items-start justify-start gap-x-3 `}> 
  <div style={{fontWeight:100}} className={`${jost.className} text-xs text-[#262626]`}>Free Shipping to Victoria teritory</div>
  <div  className={` text-[10px] text-[#9D9D9D]`}>Delivery time 14 -17 days</div>
     </div>
   </div>
   
 </div>

 {/* quantity */}
 <div className='flex flex-col spce-y-2'>
    <div className={`${jost.className} flex items-center justify-start gap-x-8 `}>
        <span style={{fontWeight:200}} className={`${jost.className} text-sm text-[#262626] min-w-14`}>Quantity</span>
        
        <div className={`${jost.className} flex   items-center justify-start gap-x-3 `}> 
        <div style={{fontWeight:100}} className={`${jost.className} border px-3 py-1 w-20 flex items-center justify-between rounded-md border-slate-300 text-xs`}><span className='text-slate-500 hover:cursor-pointer'>--</span><span>2</span><span className='text-slate-500 hover:cursor-pointer'>+</span ></div>
        <div style={{fontWeight:100}} className={`${jost.className} text-[11px] text-[#555555]`}>{quantity} Avaliable</div>
       
      
        </div>
        </div>
   
 </div>

 {/* Shipping -inshurance */}
 <div className='w-full bg-[#E9E9E9] flex flex-col spce-y-2 p-4 rounded-md'>
 <div className={`${jost.className} flex items-start justify-start border-b border-slate-400 pb-1 text-lg `}> $79.98 </div>
  <div className='flex items-center justify-start gap-x-2 pt-3'>
  <span className='bg-[]'><FaCirclePlus style={{backgroundColor:'#C4C4C4'}} /> </span>
 {/* <div className='bg-[#C4C4C4] text-white rounded-full size-4 p-1 '><span className='w-full h-full flex items-center justify-center'>+</span></div> */}
 <span style={{fontWeight:500}} className={`${jost.className} text-[#555555]  text-[11px]`}>Add shipping insurance for $9( declared value  only if the package gets lost, stolen or damaged.)</span>
  </div>
        
       
        
   
 </div>
 
 {/* CTA */}
 <div className='lg:w-[70%] flex sm:flex-col md:flex-row items-center justify-center gap-x-7 sm:gap-x-0 sm:gap-y-4 md:gap-x-5'>
  <Button style='bg-[#4172DC] hover:bg-blue-600 duration-500 text-white w-full p-3 rounded-md  flex items-center justify-center' href='/'>SHOP NOW</Button>
  {/* <div className=''></div> */}
  <div className='border border-[#555555] hover:shadow-2xl hover:cursor-pointer duration-500  text-[#555555] gap-x-1  p-3 rounded-md w-full flex items-center justify-center '>
  <PiBasketThin size={19} />
   <span onClick={()=>handleCart()} style={{fontWeight:400}} className={`${jost.className}  `}>ADD TO BASKET</span>
    </div>

 </div>

 
    </div>
  )
}

export default TopDataHandler