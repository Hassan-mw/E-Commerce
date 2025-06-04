import { Jost } from 'next/font/google'

import { MdKeyboardArrowRight } from 'react-icons/md'
// import ProductDetailsData from '../ProductDetailsData'

import Link from 'next/link'
// import DataDetails from '../DataDetails'
const DataDetails=dynamic(()=>import('../DataDetails')) ; 
const ProductRowBottom=dynamic(()=>import('../ProductRowBottom')) ; 
const ProductDetailsData=dynamic(()=>import('../ProductDetailsData')) ; 
import { getProductById } from '../../API/FeatchAllProduct'
import dynamic from 'next/dynamic'

import { PageProps } from '@/.next/types/app/[locale]/page'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page = async({params}:PageProps) => {
    const {id}=await params
    const data=await getProductById({id})
    console.log(data)
    const {name,main_image,style,images,price,color,size,quantity,details,shortdetail,prodcutdetails}=data[0]
 
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-full max-w-screen-xl  flex flex-col space-y-8 items-center justify-center'>
     {/* Current Page showing */}
       <div className='w-full flex   max-w-screen-xl items-start justify-start space-x-3 bg-white py-3 px-5'>
           <Link href="/" style={{fontWeight:300}} className={` ${jost.className} flex hover:cursor-pointer items-center text-sm justify-center text-[#555555]`}>Homepage <MdKeyboardArrowRight size={20} /></Link>
           <Link href="/products/all" className={` ${jost.className} flex items-center justify-center hover:cursor-pointer text-sm text-[#555555]`}>Cloths <MdKeyboardArrowRight size={20} /></Link>
           <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{name} </span>
      </div>
        
     <ProductDetailsData id={id} price={price} name={name}  images={images} color={color} quantity={quantity} size={size} />  
     {/* <DataDetails details={details} shortdetail={shortdetail} prodcutdetails={prodcutdetails}  />      */}
     <ProductRowBottom id={id}/> 
    </div>
    </div>
  )
}

export default page