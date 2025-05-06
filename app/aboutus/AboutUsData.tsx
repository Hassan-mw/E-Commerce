import { Jost } from 'next/font/google'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { BsShop } from 'react-icons/bs'
import { RiDiscountPercentFill } from 'react-icons/ri'
import { GiCargoShip } from 'react-icons/gi'
import { RiCustomerService2Line } from 'react-icons/ri'
import Image from 'next/image'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})              
// sdgshshshshfhsfhsfhh

const AboutUsData = () => {
  return (
    <div className='w-full flex flex-col space-y-20 '>


    <div className='w-full flex  items-center justify-between gap-x-20'>

     {/* 1 */}
    <div className='w-full flex flex-col  items-start justify-start space-y-4'>
    <div style={{fontWeight:100}} className={`${jost.className} text-lg text-[#262626]`}>Let's get to know luminae</div>
    <div style={{fontWeight:500}} className={` text-4xl text-[#262626] `}>Providing the best experience to make your <span className='text-blue-500'>Online Shopping</span></div>
    <div style={{fontWeight:200}} className={`${jost.className} text-md   text-[#555555]`}>At Luminae,wea are more than just an online store - we are your ultimate destination for an unparelleled shopping expeerience. Our job began witha  asimple yet powerful ideas: to create a platform that only offers a wide array of products but also fosters a sense of community and connection among our customer.</div>
     {/* Numbers */}
     <div className='flex items-center justify-between  w-[70%]'>

    {/* 1 */}
    <div className='flex flex-col items-start justify-start space-y-1 '>
    <div  className={`font-bold text-2xl text-[#3E60C9]`}>20+</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs text-[#555555]`}>Shopping category</div>
    </div>

    {/* 2 */}
    <div className='flex flex-col items-start justify-start  space-y-1'>
    <div  className={`font-bold text-2xl text-[#3E60C9]`}>10+</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs text-[#555555]`}>Different Territory</div>
    </div>

    {/* 3 */}
    <div className='flex flex-col items-start justify-start  space-y-1'>
    <div   className={`font-bold text-2xl text-[#3E60C9]`}>4M+</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs text-[#555555]`}>Happy Client</div>
    </div>

     </div>
     </div>
  
     {/* 2 */}
    <div className='hidden lg:block w-[80%]'> 
    <div className='flex items-center justify-center  w-full'> 

     <div className='bg-blue-50 rounded-md p-4 flex items-center justify-center w-[220px] relative ' >
      {/* <div className=' absolute -top-4 size-8 rounded-full bg-[#EAF3FB] flex items-center justify-center shadow-2xl'>// </div> */}
      <Image height={40} width={40} className=' absolute -top-4 shadow-2xl border ' src="/aboutus_quotes_right.png" alt='aboutus_quotes_right'/>
     <div className={`${jost.className} text-xl text-[#555555] py-2`}>We have made many people satisfied with our Platform</div>
    </div>    
    </div>    
    </div>    
 


    </div>






    <div className='w-full grid grid-cols-1 items-end justify-end  gap-x-25 h-full '>
      {/* Context */}
    <div className='w-full flex flex-col  items-start justify-start space-y-14'>
    <div className='w-full flex flex-col  items-start justify-start space-y-3'>
    <div style={{fontWeight:300}} className={`${jost.className} text-lg text-[#262626]`}>Know our service</div>
    <div style={{fontWeight:500}} className={`  text-4xl text-[#262626]`}>We offer best service that will  <span className='text-blue-500'>make it easier</span></div>
    <div style={{fontWeight:200}} className={`${jost.className} text-md   text-[#555555]`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora alias enim nisi, id, et deleniti odio quia impedit hic labore numquam aliquid praesentium ut tenetur doloremque placeat sunt  ipsum dolor sit amet consectetur adipisicing elit. Tempora alias enim nisi, id, et deleniti odio quia impedit hic labore numquam aliquid praesentium ut tenetur doloremque placeat sunt quod l quod libero?</div>
     </div>
    {/* 4 -box */}
    <div className='w-full grid grid-cols-2 gap-5'>

      {/* 1 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><BsShop size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm`}>Full category shop</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs`}>Know our sj gkr  r gksj gskin gskgsk gsjdg service r gksj gskin gskgsk gsjdg service gksj gskin gskgsk gsjdg service</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>


      {/* 2 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><RiDiscountPercentFill size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm`}>Extraordinary discount</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs`}>Know our sj gkr  r gksj gskin gskgsk gsjdg service r gksj gskin gskgsk gsjdg service gksj gskin gskgsk gsjdg service</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>


      {/* 3 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><RiCustomerService2Line size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm`}>24-hour customer service</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs`}>Know our sj gkr  r gksj gskin gskgsk gsjdg service r gksj gskin gskgsk gsjdg service gksj gskin gskgsk gsjdg service</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>


      {/* 4 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><GiCargoShip size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm`}>Free Cargo</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-xs`}>Know our sj gkr  r gksj gskin gskgsk gsjdg service r gksj gskin gskgsk gsjdg service gksj gskin gskgsk gsjdg service</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>



    </div> 
     </div>

     {/* Image */}
     <div className='w-full pt-8 bg-green-500 h-full flex items-center justify-end'>
     <Image height={500} width={500} className=' max-h-[500px] flex items-center object-contain' src="/aboutus_main_image.png" alt="aboutus_main_image"/>
     </div>


    </div>

    </div>
  )
}

export default AboutUsData