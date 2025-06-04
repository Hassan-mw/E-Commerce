import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const FlashSalesData = () => {
    const productData=[
        {id:1,name:" Pink Dress",details:"Pink square neck dress ",rating:"66",price:56,image:"product_1745606831633.jpg",linkdeId:17},
        {id:2,name:"Purple Dress",details:"Purple prom,prty dress ",rating:"346",price:55,image:"product_1745605079427.jpg",linkdeId:5},
        {id:3,name:"Yellow Dress",details:"Black gaming chair confortable ",rating:234,price:46,image:"product_1745655040481.jpg",linkdeId:16},
        {id:4,name:"Blue Dress",details:"Black gaming chair confortable ",rating:446,price:36,image:"product_1745607166728.jpg",linkdeId:13}
    ]
  return (
    <div className='w-full  grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-10 sm:gap-7 xl:gap-5 py-12'>
        {

        productData.map((data,index)=>
      
  <Link href={`/productsDetails/${data.linkdeId}`} key={data.id} className='bg-white hover:cursor-pointer rounded-md shadow-2xl border border-slate-200 flex flex-col items-center justify-center space-y-2 py-3 w-full'>
   <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-x-8 space-y-2'>

    {/* //! TEXT */}
    <div   className={`${jost.className} text-xl font-semibold text-[#555555] `}>Deal of the Day</div>
    {/* //! TIMER */}
    <div className='flex items-start justify-center gap-x-2 '>
        <div className='flex flex-col items-center justify-center space-y-0.5'>
            <div className='text-md font-semibold'>{`${12+data.id}`}</div>
             <div style={{fontWeight:200}} className={`${jost.className} text-[#555555]  text-[10px]`}>hour</div>
               
        </div>
        <div className='text-[#555555]'>:</div>
        <div className='flex flex-col items-center justify-center space-y-0.5'>
            <div className='text-md font-semibold'>{`${data.id+34}`}</div>
             <div style={{fontWeight:200}} className={`${jost.className} text-[#555555]  text-[10px]`}>min</div>
               
        </div>
        <div className='text-[#555555]'>:</div>

        <div className='flex flex-col items-center justify-center space-y-0.5'>
            <div className='text-md font-semibold'>{`${data.id+12}`}</div>
             <div style={{fontWeight:200}} className={`${jost.className} text-[#555555]  text-[10px]`}>sec</div>
               
        </div>

    </div>
   </div>

    {/* //! IMAGE */}
    
    <div className='h-40  flex items-end justify-end m-6  ' ><Image height={180} width={180} src={`/${data.image}`} className='object-fill w-full h-full ' alt='product_image' /></div>
    <div className='flex  gap-x-9 sm:flex-col md:flex-row lg:space-y-0 xl:space-y-1 lg:items-center lg:justify-center lg:gap-x-9 xl:flex-col xl:items-start xl:justify-start  justify-start space-y-1 lg:pb-2'>
   <div className='flex flex-col items-start justify-start space-y-2 lg:space-y-3 xl:space-y-1'>

    {/* //!  Name */}
    <div  style={{fontWeight:600}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
    {/* //!  Product_short_detail */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-[11px] text-[#555555] font-semibold `}> {data.details}</div>
   </div>
   <div className='flex flex-col items-start justify-start space-y-2  lg:space-y-3 xl:space-y-1'>

    {/* //!  Product_Rating */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-xs text-[#555555] font-semibold `}><span className='text-xs'>⭐⭐⭐⭐</span> ({data.rating})</div>
    {/* //!  Priceing */}
    <div className={`flex items-center justify-center gap-x-3`}>
        <span  style={{fontWeight:500}}  className='text-sm text-red-600'>${data.price}.99</span>
        <span  style={{fontWeight:400}} className='text-[#555555] text-[10px]'>${data.price*2+9}.99</span>
        <span className='bg-red-600 rounded-xs text-white text-[8px] px-1'>-40%</span>
        </div>
    
   </div>
    
    </div>
    </Link>
      )}
    </div>
  )
}

export default FlashSalesData