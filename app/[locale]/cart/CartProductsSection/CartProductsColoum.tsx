import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const CartProductsColoum = () => {

  return (
    <div className='w-full flex flex-col space-y-5 px-5'>
      <div className='text-xl font-semibold'>Card</div>
        {/*Single Product -1  */}
        <div className='w-full flex flex-col space-y-2'>
        {/* Upper */}
         <div className='w-full flex items-center justify-between'>
        {/* Image+name */}
        <div className='flex items-start justify-start gap-x-3'>
        <div className='border py-1 px-2 rounded-sm border-slate-200'> <Image height={30} width={30} src="/product_1745603772014.jpg" alt='Images' />   </div>
         {/* name + color */}
         <div className='flex flex-col items-start justify-start pt-2 space-y-2'>
         <div style={{fontWeight:400}} className={`${jost.className} text-lg`}>2 Piece Mango set- Regular fit</div>   
         <div className='flex items-center justify-center gap-x-1'><span className={`text-sm text-[#7B7B7B] `}>Color :</span><span className='size-3 rounded-full bg-yellow-500'></span> </div>   

         </div>
        </div>
         {/*Price  */}
        <span className={`${jost.className} text-md`}>$25.5</span>  
        </div>   
        {/* Bottom */}
        <div className='w-full flex items-center justify-between'>
        <div className='flex items-center justify-center gap-x-4 px-2 py-1 border rounded-sm border-slate-200 text-[12px]'><span>-</span><span>1</span> <span>+</span></div>
        <span className={`${jost.className} text-md`}>$25.5</span>  
        <span className='text-[#7B7B7B] '><RiDeleteBin6Line size={20} /></span>
         
        </div>
        </div>


        {/*Single Product -2  */}
        <div className='w-full flex flex-col space-y-2'>
        {/* Upper */}
         <div className='w-full flex items-center justify-between'>
        {/* Image+name */}
        <div className='flex items-start justify-start gap-x-3'>
        <div className='border py-1 px-2 rounded-sm border-slate-200'> <Image height={30} width={30} src="/product_1745603772014.jpg" alt='Images' />   </div>
         {/* name + color */}
         <div className='flex flex-col items-start justify-start pt-2 space-y-2'>
         <div style={{fontWeight:400}} className={`${jost.className} text-lg`}>2 Piece Mango set- Regular fit</div>   
         <div className='flex items-center justify-center gap-x-1'><span className={`text-sm text-[#7B7B7B] `}>Color :</span><span className='size-3 rounded-full bg-yellow-500'></span> </div>   

         </div>
        </div>
         {/*Price  */}
        <span className={`${jost.className} text-md`}>$25.5</span>  
        </div>   
        {/* Bottom */}
        <div className='w-full flex items-center justify-between'>
        <div className='flex items-center justify-center gap-x-4 px-2 py-1 border rounded-sm border-slate-200 text-[12px]'><span>-</span><span>1</span> <span>+</span></div>
        <span className={`${jost.className} text-md`}>$25.5</span>  
        <span className='text-[#7B7B7B] '><RiDeleteBin6Line size={20} /></span>
         
        </div>
        </div>


        {/*Single Product -2 */}
        <div className='w-full flex flex-col space-y-2'>
        {/* Upper */}
         <div className='w-full flex items-center justify-between'>
        {/* Image+name */}
        <div className='flex items-start justify-start gap-x-3'>
        <div className='border py-1 px-2 rounded-sm border-slate-200'> <Image height={30} width={30} src="/product_1745603772014.jpg" alt='Images' />   </div>
         {/* name + color */}
         <div className='flex flex-col items-start justify-start pt-2 space-y-2'>
         <div style={{fontWeight:400}} className={`${jost.className} text-lg`}>2 Piece Mango set- Regular fit</div>   
         <div className='flex items-center justify-center gap-x-1'><span className={`text-sm text-[#7B7B7B] `}>Color :</span><span className='size-3 rounded-full bg-yellow-500'></span> </div>   

         </div>
        </div>
         {/*Price  */}
        <span className={`${jost.className} text-md`}>$25.5</span>  
        </div>   
        {/* Bottom */}
        <div className='w-full flex items-center justify-between'>
        <div className='flex items-center justify-center gap-x-4 px-2 py-1 border rounded-sm border-slate-200 text-[12px]'><span>-</span><span>1</span> <span>+</span></div>
        <span className={`${jost.className} text-md`}>$25.5</span>  
        <span className='text-[#7B7B7B] '><RiDeleteBin6Line size={20} /></span>
         
        </div>
        </div>
    </div>
  )
}

export default CartProductsColoum