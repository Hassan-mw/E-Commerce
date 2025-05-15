import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { CiTrash } from 'react-icons/ci'



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const CartProductsColoum = () => {

  return (
    <div className='w-full flex flex-col space-y-5 px-5'>
      <div className='text-md font-semibold'>Card - 3</div>

        {/*Single Product -1  */}
        <div className='w-full flex flex-col lg:flex-row lg:space-x-7 lg:space-y-0 space-y-3 lg:items-start lg:justify-start'>
        {/* Upper */}
         <div className='w-full flex items-start justify-between  '>
        {/* Image+name */}
        <div className='flex items-start justify-start gap-x-3'>
        <div className='border py-1 px-2 rounded-sm border-slate-200'> <Image height={20} width={20} src="/product_1745603772014.jpg" alt='Images' />   </div>
         {/* name + color */}
         <div className='flex flex-col items-start justify-start pt-0 space-y-0'>
         <div style={{fontWeight:400}} className={` text-lg md:text-sm lg:text-md`}>2 Piece Mango set- Regular fit</div>   
         <div className='flex items-center justify-center gap-x-1'><span className={`text-sm text-[#7B7B7B] `}>Color :</span><span className='size-3 rounded-full bg-yellow-500'></span> </div>   

         </div>
        </div>
         {/*Price  */}
        <span className={` text-sm  text-[#6e6d6d]`}>$25.5</span>  
        </div>   
        {/* Bottom */}
        <div className='w-full flex items-center justify-between'>
        <div className='flex items-center justify-center gap-x-4 px-2 py-1 border rounded-sm border-slate-200 text-[12px]'><span>-</span><span>1</span> <span>+</span></div>
        <span className={` text-sm`}>$25.5</span>  
        <span className='text-[#7B7B7B] '><CiTrash size={20} /></span>
         
        </div>
        </div>
     


      
    </div>
  )
}

export default CartProductsColoum