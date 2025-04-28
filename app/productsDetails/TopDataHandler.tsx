import { Jost } from 'next/font/google'
import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TopDataHandler = ({name,price}) => {
  return (
    <div className='w-full flex flex-col space-y-4 px-5'>
  {/* Name + Price */}
 <div className='flex items-center justify-between w-full spce-y-2'>
    <div style={{fontWeight:500}} className={`${jost.className} text-xl text-[#262626] `}>{name}</div>
    <div style={{fontWeight:500}} className={` text-lg `}>${price}.99</div>
 </div>

 {/* Size */}
 <div className='flex flex-col spce-y-2'>
    <div className={`${jost.className} flex items-center justify-start gap-x-8 `}>
        <span style={{fontWeight:200}} className={`${jost.className} text-xs text-[#262626]`}>size</span>
        
        <div className={`${jost.className} flex items-center justify-center gap-x-3 `}> 
        <span style={{fontWeight:200}} className={`${jost.className} border rounded-sm border-slate-200 px-3 py-0.5 text-[#555555] text-xs`}>sm</span>
        <span style={{fontWeight:200}} className={`${jost.className} border rounded-sm border-slate-200 px-3 py-0.5 text-[#555555]  text-xs`}>md</span>
        <span style={{fontWeight:200}} className={`${jost.className} border rounded-sm border-slate-200 px-3 py-0.5 text-[#555555] text-xs`}>xl</span>
        </div>
        </div>

 </div>

 {/* color */}
 <div className='flex flex-col spce-y-2'>
    <div className={`${jost.className} flex items-center justify-start gap-x-8 `}>
        <span style={{fontWeight:200}} className={`${jost.className} text-xs text-[#262626]`}>color</span>
        
        <div className={`${jost.className} flex items-center justify-center gap-x-3 `}> 
        <span className='size-3 rounded-full bg-green-600'></span>    
        <span className='size-3 rounded-full bg-blue-600'></span>    
        <span className='size-3 rounded-full bg-yellow-600'></span>    
       
      
        </div>
        </div>
   
 </div>

 {/* shipping */}
 <div className='flex flex-col spce-y-2'>
    <div className={`${jost.className} flex items-center justify-start gap-x-8 `}>
        <span style={{fontWeight:200}} className={`${jost.className} text-xs text-[#262626]`}>Shipping</span>
        
        <div className={`flex flex-col  items-start justify-start gap-x-3 `}> 
        <div style={{fontWeight:100}} className={`${jost.className} text-xs text-[#262626]`}>Free Shipping to Victoria teritory</div>
        <div  className={`${jost.className} text-[11px] text-[#9D9D9D]`}>Delivery time 14 -17 days</div>
       
      
        </div>
        </div>
   
 </div>

 {/* quantity */}
 <div className='flex flex-col spce-y-2'>
    <div className={`${jost.className} flex items-center justify-start gap-x-8 `}>
        <span style={{fontWeight:200}} className={`${jost.className} text-sm text-[#262626]`}>Quantity</span>
        
        <div className={`${jost.className} flex   items-center justify-start gap-x-3 `}> 
        <div style={{fontWeight:100}} className={`${jost.className} border px-3 py-1 w-20 flex items-center justify-between rounded-md border-slate-300 text-xs`}><span className='text-slate-500 hover:cursor-pointer'>--</span><span>2</span><span className='text-slate-500 hover:cursor-pointer'>+</span ></div>
        <div style={{fontWeight:100}} className={`${jost.className} text-[11px] text-[#555555]`}>50 Avaliable</div>
       
      
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
    </div>
  )
}

export default TopDataHandler