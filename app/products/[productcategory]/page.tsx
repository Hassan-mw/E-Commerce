import { Jost } from 'next/font/google'
import { MdKeyboardArrowRight } from 'react-icons/md'
import ProductData from '../ProductData'
import ProductSideBarTrigger from '../ProductSideBarTrigger'
import ProductListSidebarData from '../ProductListSidebarData'
import { getAllProduct } from '@/app/API/FeatchAllProduct'
import SortingBy from '../SortingBy'
import { DataContext } from '@/app/ContextApi/ContextApi'
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})





const page = async({params,searchParams}:{params:{productcategory:string},searchParams:URLSearchParams}) => {
  const parameters=await searchParams
  const data=await getAllProduct({parameters})
   
   
  const {productcategory}=await params
   const [category,productName]=productcategory.split('_')
  return (
    <div className='w-full flex items-center justify-center '>
    <div className='w-full flex flex-col items-center justify-center  '>
      {/* Current Page showing */}
     <div className='w-full flex   max-w-screen-2xl items-start justify-start space-x-3 bg-white py-3 px-5'>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#555555]`}>Homepage <MdKeyboardArrowRight size={20} /></span>
      <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{model}{category} </span>
      {/* <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{productName} <MdKeyboardArrowRight size={20} /></span> */}
     </div>


      {/*//! Current Page showing +  side bar trigger  bg-[#E9E9E9]*/}
     <div className='w-full flex items-center justify-center bg-[#E9E9E9] '>
     <div className='w-full max-w-screen-2xl grid grid-cols-3 lg:grid-cols-2 py-3 px-1 sm:px-6  xl:px-5'>
      {/* Number of product shower */}
     <div className='  flex items-center justify-start gap-x-3 '>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#262626]`}>{category}</span>
      <span style={{fontWeight:300}} className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{data.length} items</span>
      
     </div>
      {/* Side bar trigger shower */}
     <div className=' lg:hidden  w-full flex items-center justify-start '> <ProductSideBarTrigger/></div>
           
     {/* Showing sort by */}
    <SortingBy/>
     </div>
     </div>


     {/*//!  DataPage */}
     <div  className="w-full h-full flex flex-col lg:flex-row lg:space-x-5 px-5  max-w-screen-2xl">
        <div className='w-[40%] hidden lg:block py-12'>
          <ProductListSidebarData/>
       
        </div>
        <div className='w-full     '>
           <ProductData data={data}/>
          </div>
          </div>
    </div>
    </div>
  )
}

export default page