import Button from '@/components/Button'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const TrendingProductData = () => {
    const productData=[
      {id:3,name:"Casual",details:"Dotted dress-Cauual ",image:"trending_product_3.png",url:'casual'},
      {id:2,name:"Bohemia",details:"Dotted dress-Behemia",image:"trending_product_2.png",url:'bohemian'},
        {id:1,name:"Zara",details:"Dotted dress-Zara",image:"trending_product_1.png",url:'zara'},
        // {id:4,name:"Gaming Chair",details:"Black gaming chair confortable ",rating:36,price:82,image:"trending_product_3.png"},
    ]
  return (
    <div className='w-full space-y-7 md:space-y-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3   sm:gap-7 lg:gap-12 py-9'>
        {

        productData.map((data,index)=>
      
  <div key={data.id} className='bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
   

    {/* //! IMAGE */}

<Image height={444} width={444} src={`/${data.image}`} className='object-cover w-full h-full sm:max-h-80   object-top rounded-t-md' alt='product_image' />
   <div className='bg-[#272626] rounded-b-md  w-full flex   space-y-3 lg:space-y-2  md:flex-col lg:flex-row items-center justify-between p-3 text-white'>
    <div className=' flex flex-col items-center justify-start space-y-1'>

    <div style={{fontWeight:300}} className={`${jost.className} text-xl`}>{data.name} Cloths</div>
    <div  style={{fontWeight:300}} className={`${jost.className} text-xs`}>{data.details}</div>
    </div>
  
    <Link href={`/products/${data.url}`} className={`${jost.className} w-44 md:w-32 text-sm border rounded-md hover:border-[#272626] hover:border-x-white hover:border-b duration-500 border-white    py-2 px-4 gap-x-1 flex items-center justify-center`}>Shop Now</Link>

    </div> 
    </div>
      )}
    </div>
  )
}

export default TrendingProductData