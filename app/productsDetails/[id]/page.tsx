import { Jost } from 'next/font/google'

import { MdKeyboardArrowRight } from 'react-icons/md'
import ProductDetailsData from '../ProductDetailsData'
import { getProductById } from '@/app/API/FeatchAllProduct'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page = async({params}:{params:{id:URLSearchParams}}) => {
    const {id}=await params
    const data=await getProductById({id})
    const {name,main_image,style,images}=data[0]

  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-full max-w-screen-2xl  flex flex-col spcae-y-4 items-center justify-center'>
     {/* Current Page showing */}
          <div className='w-full flex   max-w-screen-2xl items-start justify-start space-x-3 bg-white py-3 px-5'>
           <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#555555]`}>Homepage <MdKeyboardArrowRight size={20} /></span>
           {/* <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>women <MdKeyboardArrowRight size={20} /></span> */}
           <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>Cloths <MdKeyboardArrowRight size={20} /></span>
           <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>{name} </span>
          </div>
        
       <ProductDetailsData  images={images} /> 

    </div>
    </div>
  )
}

export default page