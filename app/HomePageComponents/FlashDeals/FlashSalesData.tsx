import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const FlashSalesData = () => {
    const productData=[
        {id:1,name:"Gaming Controller",details:"Pink gaming controller for girls",rating:"66",price:56,image:"product_1744547713587.jpeg"},
        {id:2,name:"Black Sneakers",details:"Black color sneakers for men",rating:"44",price:55,image:"product_1744546871227.jpeg"},
        {id:3,name:"Gaming Chair",details:"Black gaming chair confortable ",rating:36,price:82,image:"product_1744305213513.jpeg"},
        {id:4,name:"Gaming Chair",details:"Black gaming chair confortable ",rating:36,price:82,image:"product_1744311106382.jpeg"}
    ]
  return (
    <div className='w-full  grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-10 py-12'>
        {

        productData.map((data,index)=>
      
  <div key={data.id} className='bg-white hover:cursor-pointer rounded-md shadow-2xl border border-slate-200 flex flex-col items-center justify-center space-y-2 py-3 w-full'>
    {/* //! TEXT */}
    <div  style={{fontWeight:600}} className={`${jost.className} text-md text-slate-500 `}>Deal of the Day</div>
    {/* //! TIMER */}
    <div className='flex items-start justify-center gap-x-2 '>
        <div className='flex flex-col items-center justify-center space-y-0.5'>
            <div className='text-md font-semibold'>12</div>
             <div style={{fontWeight:200}} className={`${jost.className} text-slate-400  text-[10px]`}>hour</div>
               
        </div>
        <div className='text-slate-400'>:</div>
        <div className='flex flex-col items-center justify-center space-y-0.5'>
            <div className='text-md font-semibold'>43</div>
             <div style={{fontWeight:200}} className={`${jost.className} text-slate-400  text-[10px]`}>min</div>
               
        </div>
        <div className='text-slate-400'>:</div>

        <div className='flex flex-col items-center justify-center space-y-0.5'>
            <div className='text-md font-semibold'>12</div>
             <div style={{fontWeight:200}} className={`${jost.className} text-slate-400  text-[10px]`}>sec</div>
               
        </div>

    </div>
    {/* //! IMAGE */}
    
    <div className='h-40  flex items-end justify-end m-6 bg-green-500 ' ><Image height={180} width={180} src={`/${data.image}`} className='object-fill w-full h-full ' alt='product_image' /></div>
    <div className='flex flex-col items-start justify-start space-y-1'>

    {/* //!  Name */}
    <div  style={{fontWeight:600}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
    {/* //!  Product_short_detail */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-[11px] text-slate-400 font-semibold `}> {data.details}</div>
    {/* //!  Product_Rating */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-xs text-slate-400 font-semibold `}><span className='text-xs'>⭐⭐⭐⭐</span> ({data.rating})</div>
    {/* //!  Priceing */}
    <div className={`flex items-center justify-center gap-x-3`}>
        <span  style={{fontWeight:500}}  className='text-sm text-red-600'>${data.price}.99</span>
        <span  style={{fontWeight:400}} className='text-slate-500 text-[10px]'>${data.price*2+9}.99</span>
        <span className='bg-red-600 rounded-xs text-white text-[8px] px-1'>-40%</span></div>
    
    
    </div>
    </div>
      )}
    </div>
  )
}

export default FlashSalesData