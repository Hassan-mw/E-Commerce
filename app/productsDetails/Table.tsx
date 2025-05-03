import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const Table = () => {

  const shippingTableData=[
    {id:1,image:'shipping_1.png',cost:'Free',time:'14-21 days',insurance:false},
    {id:2,image:'shipping_2.png',cost:'$15',time:'7-14 days',insurance:true},
    {id:3,image:'shipping_3.png',cost:'$21',time:'3-7 days',insurance:true},
  ]

  return (
    <div className=' w-full flex  items-center justify-center '>
    <div className=' max-w-2xl w-full flex flex-col  items-center justify-center gap-2 p-2'>

    <div className='w-full grid pb-2 border-b border-slate-200 items-center justify-center grid-cols-4 border-[#dbd5d5'>
    <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center text-sm text-[#262626] `}>Shipping Company</div>
    <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center text-sm text-[#030202] `}>Shipping Cost</div>
    <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center text-sm text-[#030202]`}>Estimeted Dilivery Time</div>
    <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center text-sm text-[#030202]`}>Packet Insurance</div>
    
    </div>
   {
  shippingTableData.map((data,index)=>
    <div key={data.id} className='w-full grid grid-cols-4 space-y-3 '>
    <div className='flex items-center justify-center'><Image height={100} width={100} className='object-fill  flex items-center justify-center '  src={`/${data.image}`} alt="company_image"/></div> 
    <div  className={` flex items-center justify-center  text-xs text-[#040101] `}>{data.cost}</div>
    <div  className={` flex items-center justify-center  text-xs text-[#262626]`}>{data.time}</div>
    <div style={{fontWeight:300}} className='flex items-center justify-center gap-x-2'>   {data.insurance===true ? <input  defaultChecked   type='checkbox'  /> : <input    type='checkbox'  />  } <span className='text-xs'></span> Avaliable </div>    

    </div>
    
    )  }

   </div>
    
   </div>
 )
}

export default Table

// const Table = () => {
//   return (
//     <div className='border w-full flex items-center justify-center gap-2'>
//     <div className=' w-full flex-col space-y-4 p-2'>
//     <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#262626]`}>Shipping Company</div>
//     <Image height={100} width={100} className='object-fill'  src="/shipping_1.png" alt="company_image"/>
//     <Image height={100} width={100} className='object-fill'  src="/shipping_2.png" alt="company_image"/>
//     <Image height={100} width={100} className='object-fill'  src="/shipping_3.png" alt="company_image"/>
//     </div>


//     <div className=' w-full flex-col space-y-4 p-2'>
//     <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#030202]`}>Shipping Cost</div>
//     <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Free</div>
//     <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>$15</div>
//     <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>$20</div>
//     </div>
//     <div className=' w-full flex-col space-y-4 p-2'>
//     <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#030202]`}>Estimeted Dilivery Time</div>
//     <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>14-21 days</div>
//     <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>7-14 days</div>
//     <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>3-7 days</div>
//     </div>
//     <div className=' w-full flex-col items-start justify-start space-y-4 p-2'>
//     <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#030202]`}>Packet Insurance</div>
//     <div style={{fontWeight:300}} className=' flex items-center justify-start gap-x-2'><input type='checkbox'/> <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Avaliable</div></div>
//     <div style={{fontWeight:300}} className='flex items-center justify-start gap-x-2'><input type='checkbox'/> <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Avaliable</div></div>
//     <div style={{fontWeight:300}} className='flex items-center justify-start gap-x-2'><input type='checkbox'/><div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Avaliable</div>    </div>
//     </div>
    
//     </div>
//   )
// }

// export default Table