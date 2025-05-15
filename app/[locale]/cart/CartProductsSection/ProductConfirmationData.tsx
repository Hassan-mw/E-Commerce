import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const ProductConfirmationData = () => {
  return (
        <div className='w-full flex items-center justify-center px-3'>
        <div className='w-full flex flex-col space-y-5 bg-[#F5F5F5] rounded-md py-3 px-6'>
          <div className='text-xs text-[#4B5157]'>Shopping items</div>
           
            {/*Shipping Item  */}
            <div className='w-full flex flex-col border-b pb-3 border-[#D9D9D9] '>
            {/* Upper */}
             <div className='w-full grid grid-cols-2 gap-2 place-content-center  '>
            {/* Image+name */}
            <div className='flex items-center justify-center gap-x-3 '>
            <div className='border py-1 px-2 rounded-sm border-slate-200'> <Image height={20} width={20} src="/product_1745603772014.jpg" alt='Images' />   </div>
             {/* name + color */}
             <div className='flex flex-col items-start justify-start '>
             <div style={{fontWeight:400}} className={` text-xs`}>2 Piece Mango set- Regular fit</div>   
             <div className='flex items-center justify-center gap-x-1'><span className={`text-sm text-[#7B7B7B] `}>Color :</span><span className='size-3 rounded-full bg-yellow-500'></span> </div>   
    
             </div>
            </div>

            {/* name + color */}
             <div className='flex w-full  items-center justify-center '>
             <div className='flex  items-start justify-start flex-col  pt-0 space-y-0'>
             <div style={{fontWeight:400}} className={` text-xs text-[#555555]`}>$25.99</div>   
             <div className='flex items-center justify-center gap-x-1 text-xs'>x1 </div>   
    
             </div>
             {/*Price  */}
            </div>   
            <span className={` text-sm  text-[#6e6d6d]`}>$25.5</span>  
           
            </div>
            </div>


            {/*Payment - Method */}
            <div className='w-full flex flex-col space-y-2 border-b pb-3 border-[#D9D9D9] '>
            <div className='text-xs text-[#4B5157]'>Payment Method</div>
            <div className='w-full flex items-center justify-between'><div className='text-sm font-semibold'>Paypal</div>  <Image height={60} width={60}  className="object-contain"  src="/Paypal_method.png" alt="paypal_methoad" />
            </div> 
            </div>



            {/*Payment - Company */}
            <div className='w-full flex flex-col space-y-3 border-b pb-5 border-[#D9D9D9] '>
            <div className='text-xs text-[#4B5157]'>Payment Method</div>
            <div className='w-full flex items-center justify-between'><div className='text-sm font-semibold'>Paypal</div>   <Image height={60} width={60} className="object-contain" src="/shipping_company_1.png" alt="paypal_methoad" />   </div> 

            <div className='w-full flex flex-col space-y-1 text-xs '>
            <div className='w-full flex flex-col space-y-2 '>
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Name</div>  <div className='text-[#262626]'>Saina Ghasemi</div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Country</div> <div className='text-[#262626]'>  Australia </div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Address</div> <div className='text-[#262626]'>  10 Beach Street,2281 </div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>City</div>  <div className='text-[#262626]'></div> Melbourne </div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Phone</div>   <div className='text-[#262626]'>(02) 5512 3553 </div> </div> 
            </div>

            </div>


            </div>
         
    
    
          
        </div>
  )
}

export default ProductConfirmationData