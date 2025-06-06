import HandleCurrentCurrency from '@/components/HandleCurrentCurrency'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const FavouriteData = ({data}) => {
  return (
  <div className='w-full flex flex-col sapce-y-3'>
  <div className='flex flex-col space-y-3'>
  <h1 className={`${jost.className} text-3xl font-bold`}>Your all favourite products:</h1> 
  </div>
  <div className={`  w-full grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4   sm:gap-7 lg:gap-x-14 py-9 sm:px-2`}>
  {
   data.map((data,index:number)=>
      // <div>
  <Link href={`/productsDetails/${data.id}`} key={data.id} className='bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
  {/* //! IMAGE */}
  <div className='w-full h-full border-t  border-slate-100 rounded-t-md shadow-2xl'>
  <Image loading='lazy' height={250} width={250} src={`/${data.main_image}`} className='object-contain max-h-[250px]   w-full h-full  object-center p-3 rounded-t-md' alt='product_image' />
  </div>
  <div className=' shadow-2xl h-14 bg-white border-t border-slate-300 rounded-b-md  w-full flex items-center justify-center  space-y-1 p-3 text-white'> 
  <div className='flex flex-col items-center justify-center space-y-2 py-4'>
  {/* //!  Name */}
  <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
  {/* //!  Priceing */}
  <div className={`flex items-center justify-center gap-x-3 pb-3`}>
    <HandleCurrentCurrency style="text-md font-semibold text-red-600"  currency={data.price} />
    <span  style={{fontWeight:400}} className='text-[#555555] font-semibold text-md'>${data.price*2+9}.99</span>
    <span className=' rounded-xs text-red-500 font-semibold text-md'>-40%</span>
  </div> 
  </div>
  </div>
  </Link>
  )}
  </div>

  </div>  

  )
}

export default FavouriteData