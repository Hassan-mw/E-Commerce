import { Jost } from 'next/font/google'
import { MdKeyboardArrowRight } from 'react-icons/md'
import ProductData from '../ProductData'
import ProductSideBarTrigger from '../ProductSideBarTrigger'
// import ProductListSidebarData from '../ProductListSidebarData'
const ProductListSidebarData =dynamic(()=>import('../ProductListSidebarData'))

import SortingBy from '../SortingBy'
import NumberProductShower from '../NumberProductShower'
import { getAllProduct } from '../../API/FeatchAllProduct'
import dynamic from 'next/dynamic'
import { Suspense } from 'react';
import { FilteredProductDataByNavbarParams } from '@/app/utils/Function'
import ProductArrray from '../ProductArrray'
import Loading from './Loading'
import { PageProps } from '@/.next/types/app/[locale]/page'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})





const page = async({params,searchParams}:PageProps) => {
  const parameters=await searchParams
  let data=await getAllProduct({parameters})
  const length=data.length
  const {productcategory}=await params
  const [category,productName]=productcategory.split('_')
  if(category!=='All'){
  data=data.filter((data :any,index:number)=>data.color===category || data.style===category )
  }



  return (
    <div className='w-full flex items-center justify-center '>
    <div className='w-full flex flex-col items-center justify-center  '>
      {/* Current Page showing */}
     <div className='w-full flex   max-w-screen-2xl items-start justify-start space-x-3 bg-white py-3 px-5'>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#555555]`}>Homepage <MdKeyboardArrowRight size={20} /></span>
      <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{category} </span>
      {/* <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{productName} <MdKeyboardArrowRight size={20} /></span> */}
     </div>


    


     {/*//!  DataPage */}
     <div  className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 px-5  max-w-screen-2xl">
     <div className='w-[40%] hidden lg:block py-12'>
     <ProductListSidebarData category={category}  />  
     </div>

    {/* <Suspense  fallback={<Loading/>}> */}
    <div className='w-full     '>
    {/* <ProductData  data={data}/> */}
    <ProductArrray category={category} data={data} />
    </div>
    {/* </Suspense> */}
    </div>


  </div>
  </div>
  )
}



export default page