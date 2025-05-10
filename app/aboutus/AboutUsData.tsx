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
    <div style={{fontWeight:200}} className={`${jost.className} text-md   text-[#555555]`}>At Luminae, we are more than just an online store – we are your ultimate destination for an unparalleled shopping experience. Our journey began with a simple yet powerful idea: to create a platform that not only offers a wide array of products but also fosters a sense of community and connection among our customers.</div>
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






    <div className='w-full grid grid-cols-1 sm:grid-cols-2 items-end justify-end  gap-x-3 h-full '>
       {/* Image */}
     <div className='w-full pt-8 bg-green-500 h-full flex items-center justify-end'>
     <Image height={500} width={500} className=' h-full max-h-[500px] w-full flex items-center object-contain sm:hidden ' src="/aboutus_main_image.png" alt="aboutus_main_image"/>
     <Image height={500} width={500} className='  max-w-full object-contain hidden sm:block' src="/about_second_image.png" alt="about_second_image"/>
     </div> 
      {/* Context */}
    <div className='w-full flex flex-col  items-start justify-start space-y-14'>
    <div className='w-full flex flex-col  items-start justify-start space-y-3'>
    <div style={{fontWeight:300}} className={`${jost.className} text-lg text-[#262626]`}>Know our service</div>
    <div style={{fontWeight:500}} className={`  text-4xl text-[#262626]`}>We offer best service that will  <span className='text-blue-500'>make it easier</span></div>
    <div style={{fontWeight:200}} className={`${jost.className} text-md   text-[#555555]`}> Discover unparalleled convenience with our top-tier service, designed to make your shopping experience smoother than ever.Experience shopping made effortless through our exceptional service that puts your needs at the forefront.
Elevate your shopping journey with our unmatched service, redefining convenience and satisfaction.</div>
     </div>
    {/* 4 -box */}
    <div className='w-full grid grid-cols-2 gap-5'>

      {/* 1 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><BsShop size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className}  text-[11px]`}>Full category shop</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-[9px] text-[#555555]`}>Explore our comprehensive online store where you'll find a diverse range of products across multiple categories, all curated to cater to your various needs and ...</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>


      {/* 2 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><RiDiscountPercentFill size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className}  text-[11px]`}>Extraordinary discount</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-[9px] text-[#555555]`}> Experience unparalleled savings on a wide selection of premium products that enhance your lifestyle without compromising on quality...</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>


      {/* 3 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><RiCustomerService2Line size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className} text-[11px]`}>24-hour customer service</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-[9px] text-[#555555]`}>Enjoy the convenience of free cargo services, ensuring your purchases are delivered right to your doorstep without any additional cost. Experience seamless...</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>


      {/* 4 */}
    <div className='flex flex-col items-center justify-center shadow-2xl rounded-md border border-slate-100 bg-white p-5 space-y-4'>
    <span className='size-9 rounded-full bg-[#EAF3FB] flex  items-center justify-center text-blue-500'><GiCargoShip size={25} /></span>
    <div style={{fontWeight:300}} className={`${jost.className}  text-[11px]`}>Free Cargo</div>
    <div style={{fontWeight:300}} className={`${jost.className}  text-[9px] text-[#555555]`}>Our commitment to exceptional customer care means our 24-hour customer service team is always available to assist you, ensuring your inquiries and concerns...</div>
    <div className='w-full flex items-center justify-center p-2 bg-blue-500 rounded-xs '>
      <span className={`${jost.className} text-xs gap-x-3  text-white flex items-center justify-center`}>READ MORE <FaArrowRight /></span>
    </div>
    </div>



    </div> 
     </div>

  


    </div>
       
    </div>
  )
}

export default AboutUsData