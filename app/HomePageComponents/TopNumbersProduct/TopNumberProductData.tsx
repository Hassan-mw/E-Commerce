import Button from '@/components/Button'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const TopNUmberProductData = ({style}:{style:string}) => {
    const productData=[
      {id:1,name:"Mango",details:"Kimono & Caftan - Black - Regular fit ",rating:34,price:342,image:"top_hundred_photo_1.png",linkdeId:19},
      {id:3,name:"Iniqlo ",details:"Midi atlas Slim fit - bohemian ",rating:"44",price:234,image:"top_hundred_photo_2.png",linkdeId:20},
      {id:4,name:"Mango dress",details:"Kimono & Caftan - Night club fit",rating:222,price:55,image:"top_hundred_photo_3.png",linkdeId:21},
      {id:2,name:"Zara",details:"Midi top- Daily fit",rating:77,price:346,image:"top_hundred_photo_4.png",linkdeId:22},
       
    ]
  return (
    <div className={` w-full grid gap-5 grid-cols-1 sm:grid-cols-2  ${style}   sm:gap-7 lg:gap-12 py-9`}>
        {

        productData.map((data,index)=>
      
  <Link href={`productsDetails/${data.linkdeId}`} key={data.id} className='bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
   

    {/* //! IMAGE */}

<Image height={400} width={400} src={`/${data.image}`} className='bg-[#dce5e4] object-contain w-full  max-h-72   object-top rounded-t-md' alt='product_image' />
   <div className='bg-white shadow-2xl border border-slate-100 rounded-b-md  w-full flex  sm:flex-col md:flex-row md:gap-x-3 lg:gap-x-0 lg:flex-col items-center justify-between sm:justify-start sm:items-start md:justify-between lg:justify-start space-y-1 p-3 text-white'>
    <div className='flex flex-col items-start justify-start space-y-2'>

   
    {/* //!  Name */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
    {/* //!  Product_short_detail */}
    <div  style={{fontWeight:100}} className={`${jost.className}  text-xs text-[#555555] font-semibold `}> {data.details}</div>
    </div>
    <div className='flex flex-col items-start justify-start space-y-2'>
    
    {/* //!  Product_Rating */}
    <div   className={`${jost.className} text-xs text-[#555555] font-semibold flex items-center justify-center gap-x-3 `}><span style={{fontWeight:200}} className='text-xs'>⭐⭐⭐⭐</span><span className='text-thin'>({data.rating})</span> </div>
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

export default TopNUmberProductData