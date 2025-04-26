import { TopNumberProduct, TopNumberProductDataType } from '@/app/Types/dataType'
import Button from '@/components/Button'
import { Jost } from 'next/font/google'
import Image from 'next/image'
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
    // const productData=[
    //   {id:1,name:"Mango",details:"Kimono & Caftan - Black - Regular fit ",rating:34,price:342,image:"top_hundred_photo_1.png"},
    //   {id:3,name:"Iniqlo ",details:"Midi atlas Slim fit - bohemian ",rating:"44",price:234,image:"top_hundred_photo_3.png"},
    //   {id:4,name:"Mango dress",details:"Kimono & Caftan - Colorful - Night club fit",rating:222,price:55,image:"top_hundred_photo_4.png"},
    //   {id:2,name:"Zara",details:"Midi top- Daily fit",rating:77,price:346,image:"top_hundred_photo_2.png"},
       
    // ]
  return (
    <div className={`  w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  sm:gap-7  py-9`}>
        {

        data.map((data,index:number)=>
      
  <div key={data.id} className='bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
   

    {/* //! IMAGE */}

<Image height={400} width={400} src={`/${data.main_image}`} className='object-cover w-full h-full max-h-96 md:max-h-64 lg:max-g-96 xl:max-h-[400px] shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' />
   <div className=' shadow-2xl h-36 bg-white border border-slate-100 rounded-b-md  w-full flex  sm:flex-col md:flex-row md:gap-x-3 lg:gap-x-0 lg:flex-col items-center justify-between sm:justify-start sm:items-start md:justify-between lg:justify-start space-y-1 p-3 text-white'>
    <div className='flex flex-col items-start justify-start space-y-2'>

   
    {/* //!  Name */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
    {/* //!  Product_short_detail */}
    <div  style={{fontWeight:100}} className={`${jost.className}  text-xs text-[#555555] font-semibold w-52 `}> {data.shortdetail}</div>
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
    </div>
      )}
    </div>
  )
}

export default ProductArrray