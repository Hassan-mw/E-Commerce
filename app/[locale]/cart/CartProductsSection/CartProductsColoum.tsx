import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const CartProductsColoum = () => {
  return (
    <div className='w-full flex flex-col space-y-3'>
        {/*Single Product  */}
        <div className='w-full flex flex-col space-y-1'>
        {/* Upper */}
         <div className='w-full flex items-center justify-between'>
        {/* Image+name */}
        <div className='flex items-start justify-start gap-x-1'>
         <Image height={20} width={20} src="/product_1745603772014.jpg" alt='Images' />   
         {/* name + color */}
         <div className='flex flex-col items-start justify-start '>
         <div className={`${jost.className} text-sm`}>2 Piece Mango set- Regular fit</div>   
          <div className='flex items-center justify-center gap-x-1'><span className={`text-xs`}>Color :</span><span className='size-3 rounded-full bg-yellow-300'></span> </div>   

         </div>
        </div>
         {/*Price  */}
        <span className={`${jost.className} text-md`}>$25.5</span>  
        </div>   

        </div>
    </div>
  )
}

export default CartProductsColoum