import { TopNumberProduct, TopNumberProductDataType } from '@/app/Types/dataType'
import Button from '@/components/Button'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface dataType{
  style:string;
  data:TopNumberProductDataType
}

const ProductArrray = ({data}:TopNumberProductDataType) => {

  return (
    <div className={`  w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   sm:gap-7 lg:gap-x-14 py-9 sm:px-2`}>
        {

        data.map((data,index:number)=>
      
  <Link href={`/productsDetails/${data.id}`} key={data.id} className='bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
   

    {/* //! IMAGE */}

<div className='w-full h-full border-t border-slate-100 rounded-t-md shadow-2xl'>

<Image height={400} width={400} src={`/${data.main_image}`} className='object-contain max-h-[400px]   w-full h-full  object-center p-3 rounded-t-md' alt='product_image' />
{/* <Image height={800} width={800} src={`/${data.main_image}`} className='object-cover object-top aspect-auto  w-full h-full max-h-96 md:max-h-64 lg:max-g-96 xl:max-h-[400px] shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' /> */}
</div>
   <div className=' shadow-2xl h-36 bg-white border border-slate-100 rounded-b-md  w-full flex  sm:flex-col md:flex-row md:gap-x-3 lg:gap-x-0 lg:flex-col items-center justify-between sm:justify-start sm:items-start md:justify-between lg:justify-start space-y-1 p-3 text-white'>
    <div className='flex flex-col items-start justify-start space-y-2'>

   
    {/* //!  Name */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
    {/* //!  Product_short_detail */}
    <div  style={{fontWeight:100}} className={`${jost.className}  text-xs text-[#555555] font-semibold w-52 `}> {data.shortdetail},{data.id}</div>
    </div>
    <div className='flex flex-col items-start justify-start space-y-2'>
    
    {/* //!  Product_Rating */}
    <div   className={`${jost.className} text-xs text-[#555555] font-semibold flex items-center justify-center gap-x-3 `}><span style={{fontWeight:200}} className='text-xs'>⭐⭐⭐⭐</span><span className='text-thin'>({data.ratingnumber})</span> </div>
    {/* //!  Priceing */}
    <div className={`flex items-center justify-center gap-x-3`}>
        <span  style={{fontWeight:500}}  className='text-xs text-red-600'>${data.price}.99</span>
        <span  style={{fontWeight:400}} className='text-[#555555] text-[12px]'>${data.price*2+9}.99</span>
        <span className=' rounded-xs text-red-500 text-[11px] '>-40%</span>
    
    
    </div>
    </div>

    </div>
    </Link>
      )}
    </div>
  )
}

export default ProductArrray