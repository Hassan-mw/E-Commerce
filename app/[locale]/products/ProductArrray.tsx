'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../ContextApi/ContextApi'
import { FiAlertOctagon } from 'react-icons/fi'
import HandleCurrentCurrency from '@/components/HandleCurrentCurrency'
import { TopNumberProduct, TopNumberProductDataType } from '../Types/dataType'
import NumberProductShower from './NumberProductShower'
import ProductSideBarTrigger from './ProductSideBarTrigger'
import SortingBy from './SortingBy'
import ProductArrayLoading from './[productcategory]/ProductArrayLoading'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})



interface ContextDataType{
  brand:{brandName:string};
  name:{productName:string};
}

interface ProductDataType{
  category:string;
  data:TopNumberProduct[]
}

const ProductArrray = ({data,category}:ProductDataType) => {
  const [loading,setLoading]=useState(true)
  const {brand,name}:ContextDataType=useContext(DataContext)

  if(brand.brandName!=='' && name.productName!==''){
  data=data.filter(data=>data.brand===brand.brandName && data.name.toLowerCase()===name.productName.toLowerCase())
  }
   
  useEffect(()=>{
    setLoading(false)
  },[])
 
if(loading){
  return(
 <ProductArrayLoading/>
)
}


  return (
   <div className='w-full flex flex-col space-y-6'>

  {/*//! Current Page showing +  side bar trigger  bg-[#E9E9E9]*/}
  <div className='w-full Data_Center bg-[#E9E9E9] '>
  <div className='w-full max-w-screen-2xl grid grid-cols-3 lg:grid-cols-2 py-3 px-1 sm:px-6  xl:px-5'>
  {/* Number of product shower */}
  <NumberProductShower length={data.length} category={category} />
  {/* Side bar trigger shower */}
  <div className=' lg:hidden  w-full flex items-center justify-start '> <ProductSideBarTrigger/></div>
               
  {/* Showing sort by */}
  <SortingBy/>
  </div>
  </div>

  {
  data.length===0 ?
  <div className='w-full h-full flex flex-col py-16 lg:py-0 lg:pt-10 md:flex-row lg:flex-col gap-5 items-center justify-center '>
  <img className='  object-contain  md:h-48 lg:h-full' src="/no_result.png" alt='noresult_image'/>
    
  {/* Content */}
  <div className='max-w-lg w-full p-4 rounded-md flex flex-col space-y-3 border border-[#D9D9D9]'>
  <div className={`${jost.className} text-xl ` }>No result found for searching  "  ".</div>
  <div className='flex items-start justify-start gap-x-3 '><span className='text-[#FF7A00] pt-1'><FiAlertOctagon /></span> <span className='text-sm text-[#555555]'>We recommend you to search different clear key words to get the best result.</span></div>  
  <div className='flex items-start justify-start gap-x-3'><span className='text-[#FF7A00] pt-1'><FiAlertOctagon /></span > <span className='text-sm text-[#555555]'>You can see the most related purchased products bellow.</span></div>  
  </div>
  </div>
  :

  <div className={`  w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   sm:gap-7 lg:gap-x-14 py-9 sm:px-2`}>
  {
   data.map((data,index:number)=>
      // <div>
  <Link href={`/productsDetails/${data.id}`} key={data.id} className='bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
   

    {/* //! IMAGE */}

 <div className='w-full h-full border-t  border-slate-100 rounded-t-md shadow-2xl'>

<Image loading='lazy' height={400} width={400} src={`/${data.main_image}`} className='object-contain max-h-[400px]   w-full h-full  object-center p-3 rounded-t-md' alt='product_image' />
{/* <Image height={800} width={800} src={`/${data.main_image}`} className='object-cover object-top aspect-auto  w-full h-full max-h-96 md:max-h-64 lg:max-g-96 xl:max-h-[400px] shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' /> */}
</div>
   <div className=' shadow-2xl h-36 bg-white border border-slate-100 rounded-b-md  w-full flex  sm:flex-col md:flex-row md:gap-x-3 lg:gap-x-0 lg:flex-col items-center justify-between sm:justify-start sm:items-start md:justify-between lg:justify-start space-y-1 p-3 text-white'>
    <div className='flex flex-col items-start justify-start space-y-2'>

   
    {/* //!  Name */}
    <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
    {/* //!  Product_short_detail */}
    <div  style={{fontWeight:100}} className={`${jost.className}  text-xs text-[#555555] font-semibold w-40 `}> {data.shortdetail}</div>
    </div>
    <div className='flex flex-col items-start justify-start space-y-2'>
    
    {/* //!  Product_Rating */}
    <div   className={`${jost.className} text-xs text-[#555555] font-semibold flex items-center justify-center gap-x-3 `}><span style={{fontWeight:200}} className='text-xs'>⭐⭐⭐⭐</span><span className='text-thin'>({data.ratingnumber})</span> </div>
    {/* //!  Priceing */}
    <div className={`flex items-center justify-center gap-x-3`}>
       <HandleCurrentCurrency style="text-xs text-red-600"  currency={data.price} />
        <span  style={{fontWeight:400}} className='text-[#555555] text-[12px]'>${data.price*2+9}.99</span>
        <span className=' rounded-xs text-red-500 text-[11px] '>-40%</span>
    
    
    </div>
    </div>

    </div>
    </Link>
      // </div>
      )

      

      }
  </div>
  }
    </div>

  )
}

export default ProductArrray