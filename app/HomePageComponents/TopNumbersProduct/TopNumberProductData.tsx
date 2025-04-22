import Button from '@/components/Button'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const TopNUmberProductData = () => {
    const productData=[
      {id:1,name:"Gaming Chair",details:"Black gaming chair confortable ",rating:36,price:82,image:"top_hundred_photo_1.png"},
      {id:3,name:"Black Sneakers",details:"Black color sneakers for men",rating:"44",price:55,image:"top_hundred_photo_3.png"},
      {id:4,name:"Black Sneakers",details:"Black color sneakers for men",rating:"44",price:55,image:"top_hundred_photo_4.png"},
      {id:2,name:"Black Sneakers",details:"Black color sneakers for men",rating:"44",price:55,image:"top_hundred_photo_2.png"},
        // {id:1,name:"Gaming Controller",details:"Pink gaming controller for girls",rating:"66",price:56,image:"trending_product_1.png"},
        // {id:4,name:"Gaming Chair",details:"Black gaming chair confortable ",rating:36,price:82,image:"trending_product_3.png"},
    ]
  return (
    <div className='w-full  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4   sm:gap-7 lg:gap-12 py-9'>
        {

        productData.map((data,index)=>
      
  <div key={data.id} className='bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
   

    {/* //! IMAGE */}

<Image height={444} width={444} src={`/${data.image}`} className='object-cover w-full h-full sm:max-h-80   object-top rounded-t-md' alt='product_image' />
   <div className='bg-white shadow-2xl border border-slate-100 rounded-b-md  w-full flex flex-col  items-start justify-start space-y-1 p-3 text-white'>

    {/* //!  Name */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black font-semibold `}>Mango</div>
    {/* //!  Product_short_detail */}
    <div  style={{fontWeight:100}} className={`${jost.className}  text-xs text-[#555555] font-semibold `}> Kimono & Caftan -Black Regular fit </div>


    {/* //!  Product_Rating */}
    <div   className={`${jost.className} text-xs text-[#555555] font-semibold flex items-center justify-center gap-x-3 `}><span style={{fontWeight:200}} className='text-xs'>⭐⭐⭐⭐</span><span className='text-thin'>(34)</span> </div>
    {/* //!  Priceing */}
    <div className={`flex items-center justify-center gap-x-3`}>
        <span  style={{fontWeight:500}}  className='text-xs text-red-600'>$228.99</span>
        <span  style={{fontWeight:400}} className='text-[#555555] text-[12px]'>$54.99</span>
        <span className=' rounded-xs text-red-500 text-[11px] '>-40%</span>
    
    
    </div>
    </div>
    </div>
      )}
    </div>
  )
}

export default TopNUmberProductData