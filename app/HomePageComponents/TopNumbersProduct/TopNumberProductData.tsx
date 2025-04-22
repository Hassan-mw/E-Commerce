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
      {id:2,name:"Black Sneakers",details:"Black color sneakers for men",rating:"44",price:55,image:"top_hundred_photo_2.png"},
      {id:3,name:"Black Sneakers",details:"Black color sneakers for men",rating:"44",price:55,image:"top_hundred_photo_2.png"},
      {id:4,name:"Black Sneakers",details:"Black color sneakers for men",rating:"44",price:55,image:"top_hundred_photo_2.png"},
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
   <div className='bg-[#272626] rounded-b-md  w-full flex   space-y-3 lg:space-y-2  md:flex-col lg:flex-row items-center justify-between p-3 text-white'>
    <div className=' flex flex-col items-center justify-start space-y-1'>

    <div style={{fontWeight:300}} className={`${jost.className} text-xl`}>Calvin Cloths</div>
    <div  style={{fontWeight:300}} className={`${jost.className} text-xs`}>Dotted dress-Cauual</div>
    </div>
  
    <div className={`${jost.className} w-44 md:w-32 text-sm border rounded-md hover:border-[#272626] hover:border-x-white hover:border-b duration-500 border-white    py-2 px-4 gap-x-1 flex items-center justify-center`}>
    
    <span> $89</span> <span></span> Shop Now
    </div>

    </div> 
    </div>
      )}
    </div>
  )
}

export default TopNUmberProductData