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

  
const ScrollProductShow = () => {
  return (
    // <div className='w-full flex items-center justify-between px-20 bg-[#F7DDD0] rounded-md'>
      <Carousel className=' '>
  <CarouselContent className=' max-h-80  gap-x-4 rounded-md max-w-screen-xl '>
    {/* //!  1 */}
    <CarouselItem  className=' w-full flex items-center justify-between px-20 bg-[#F7DDD0] rounded-md'>
     <div className=' flex flex-col items-start justify-start space-y-2 pl-10'>
    <div className={`${jost.className} text-2xl text-[#31373a]`}>MAGSAFE</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#465D6B]`}>Snap on a magnatic case,wallet, or both.And get fater wireless charging.</div>
     </div>
     <div>
        <Image height={333} width={333} className='object-cover h-full w-full max-h-44' src="/Iphone.png" alt='Iphone'/>
     </div>
     </CarouselItem>
    {/* //!  2 */}

    <CarouselItem  className=' w-full flex items-center justify-between px-20 bg-[#F7DDD0] '>
     <div className=' flex flex-col items-start justify-start space-y-2 pl-10'>
    <div className={`${jost.className} text-2xl text-[#31373a]`}>Truly Free</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#465D6B]`}>Flexible sole, appropriate tread for the function, and ability to absorb impact.</div>
     </div>
     <div>
        <Image height={333} width={333} className='object-cover h-full w-full max-h-44' src="/sneakers_set.png" alt='Iphone'/>
     </div>
     </CarouselItem>
    
    {/* //!  3 */}

    <CarouselItem  className=' w-full flex items-center justify-between px-20 bg-[#F7DDD0] '>
     <div className=' flex flex-col items-start justify-start space-y-2 pl-10'>
    <div className={`${jost.className} text-2xl text-[#31373a]`}>Reebox</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#465D6B]`}>Flexible sole, appropriate tread for the function, and ability to absorb impact.</div>
     </div>
     <div>
        <Image height={333} width={333} className='object-cover h-full w-full max-h-44' src="/sneakers_set.png" alt='Iphone'/>
     </div>
     </CarouselItem>
    
    {/* //!  4 */}

    <CarouselItem  className=' w-full flex items-center justify-between px-20 bg-[#F7DDD0] '>
     <div className=' flex flex-col items-start justify-start space-y-2 pl-10'>
    <div className={`${jost.className} text-2xl text-[#31373a]`}>CAROTE</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#465D6B]`}>CAROTE Nonstick Pots and Pans,Cookware Set 16pcs Kitchen Cooking Sets, Pot and Pan Non Stick w/Frying pan.</div>
     </div>
     <div>
        <Image height={333} width={333} className='object-cover h-full w-full max-h-44' src="/cooking_set.png" alt='Iphone'/>
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