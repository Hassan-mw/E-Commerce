'use client'
import HandleCurrentCurrency from '@/components/HandleCurrentCurrency'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import { redirect } from 'next/navigation'


import NumberProductShower from '../products/NumberProductShower'
import SortingBy from '../products/SortingBy'
import { FaTrash } from 'react-icons/fa6'
import { deleteFavouriteitemById } from '../API/GET/Favourite'
import Link from 'next/link'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const FavouriteData = ({data}) => {
    const category="All"
  console.log(data)
  const handleDeleteItem=async({id}:{id:number})=>{
  console.log(data)
   try{
    const data=await deleteFavouriteitemById({id})

    }
    catch(err){

    }finally{
      redirect('/favourite')
      window.location.reload();
    }
  }
  return (
  <div className='w-full flex flex-col sapce-y-3'>
    {/* Hader_Section */}
  <div className='flex flex-col space-y-3'>
  <h1 className={`${jost.className} text-3xl font-bold`}>Your all favourite products:</h1> 
  {/*//! Current Page showing +  side bar trigger  bg-[#E9E9E9]*/}
  <div className='w-full Data_Center rounded-xl bg-[#E9E9E9] '>
    <div className='w-full max-w-screen-2xl grid grid-cols-2  py-3 px-6'>
    {/* Number of product shower */}
    <NumberProductShower length={data.length} category={category} />
 
                 
    {/* Showing sort by */}
    <SortingBy/>
    </div>
    
    </div>
  </div>


  {/* No Data Exist */}
  {
  data.length===0 &&
  <div className='w-full py-20  flex flex-col space-y-4 items-center'>
  <Image height={250} width={250} src="/No_favourite.png" alt='No_favourite' />
  <h1 className={`${jost.className} text-2xl `}>No item selected yet, <Link href="/products/All" className='text-blue-500 text-2xl font-semibold border-b-2 border-white hover:border-blue-500 duration-500'>Check Items</Link></h1>
  </div>
  }

  {/* Array_data */}
  <div className={`  w-full grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4   sm:gap-7 lg:gap-x-14 py-9 sm:px-2`}>
  {
    data.length>0 &&
   data.map((data,index:number)=>
      // <div>
  <div  key={data.id} className=' bg-white hover:cursor-pointer rounded-md flex flex-col items-center justify-center  w-full'>
  {/* //! IMAGE */}
  <div className='w-full h-full border-t  border-slate-100 rounded-t-md shadow-2xl '>
  <Image loading='lazy' height={250} width={250} src={`/${data.main_image}`} className='object-contain max-h-[250px]   w-full h-full  object-center p-3 rounded-t-md' alt='product_image' />
  </div>
  <div className=' shadow-2xl bg-white  border-t border-slate-300  rounded-b-md  w-full flex items-center justify-center  space-y-1 p-2 text-white'> 
  <div className='flex flex-col items-center justify-center space-y-1 '>
  {/* //!  Name */}
  <div  style={{fontWeight:300}} className={`${jost.className} text-md text-black font-semibold `}>{data.name}</div>
  {/* //!  Priceing */}
  <div className={`flex items-center justify-between gap-x-3 `}>
    <HandleCurrentCurrency style="text-md font-semibold text-gray-600"  currency={data.price} />
    <span  style={{fontWeight:400}} className='text-[#555555] font-semibold text-md'>${data.price*2+9}.99</span>
    <span className={`${jost.className} rounded-xs text-gray-500 font-semibold text-md`}>-40%</span>
    <span onClick={()=>handleDeleteItem(data)} className='z-30 text-sm  text-red-500 hover:scale-125 duration-500'><FaTrash /></span>

  </div> 
  </div>
  </div>
  </div>
  )
 
  }
  </div>

  </div>  

  )
}

export default FavouriteData