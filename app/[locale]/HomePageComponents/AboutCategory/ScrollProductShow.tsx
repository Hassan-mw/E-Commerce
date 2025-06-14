import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
//Iphone

const jost=Jost({
    weight:['500'],
    subsets:['latin']
  })
  
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Link from 'next/link'

  
const ScrollProductShow = () => {
  return (
    // <div className='w-full flex items-center justify-between px-20 bg-[#F7DDD0] rounded-md'>
      <Carousel className=' px-14'>
  <CarouselContent className=' max-h-80  gap-x-4 rounded-md max-w-screen-xl px-16 xl:px-2'>


    {/* //!  1 */}
    <CarouselItem  className=' w-full flex items-center justify-between px-20 xl:px-0 bg-[#ffffff] py-3 rounded-md '>
     {/* Content */}
    <div className=' flex flex-col items-start justify-start space-y-2 pl-10'>
    <div className={`${jost.className} text-2xl text-[#31373a]`}>Zambitna</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#465D6B]`}>Matchable Family Zambitna</div>
    <Link href="/productsDetails/24" className='border rounded-md px-2 bg-blue-500 border-blue-500  duration-700 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white'>Check Out</Link>
    </div>
     {/* Image */}
    <div className='bg-white'>
    <Image height={333} width={333} className='object-cover h-full w-full max-h-44' src="/family_dress_1.jpg" alt='Iphone'/>
    </div>
    </CarouselItem>

    
     {/* //!  2 */}
    <CarouselItem  className=' w-full flex items-center justify-between px-20 gap-x-3 bg-[#ffffff] py-3 rounded-md'>
     <div className=' flex flex-col items-start justify-start space-y-2 pl-10'>
    <div className={`${jost.className} text-2xl text-[#31373a]`}>Hawaiian</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#465D6B]`}>Matchable Family Hawaiian</div>
    <Link href="/productsDetails/23" className='border rounded-md px-2 bg-blue-500 border-blue-500  duration-700 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white'>Check Out</Link>
     
     </div>
     <div className='bg-white '>
        <Image height={333} width={333} className='object-contain h-full w-full max-h-44' src="/family_dress_4.jpg" alt='Iphone'/>
     </div>
     </CarouselItem>
    

    {/* //!  3 */}
    <CarouselItem  className=' w-full flex items-center justify-between px-20 bg-[#ffffff] py-3 rounded-md'>
    {/* Content */}
    <div className=' flex flex-col items-start justify-start space-y-2 pl-10'>
    <div className={`${jost.className} text-2xl text-[#31373a]`}>Othandor</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#465D6B]`}>Matchable Family Othandor</div>
    <Link href="/productsDetails/25" className='border rounded-md px-2 bg-blue-500 border-blue-500  duration-700 hover:bg-white hover:text-blue-500 hover:border-blue-500 text-white'>Check Out</Link>
    
    </div>
    {/* Image */}
    <div className='bg-white'>
    <Image height={333} width={333} className='object-cover h-full w-full max-h-44' src="/product_1749149766073.jpeg" alt='Iphone'/>
    </div>

     </CarouselItem>
  
     
   
     </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    // </div>
  )
}

export default ScrollProductShow