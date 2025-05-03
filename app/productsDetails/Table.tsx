import { Jost } from 'next/font/google'
import Image from 'next/image'
import React from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const Table = () => {
  return (
    <div className='border w-full flex items-center justify-center gap-2'>
    <div className=' w-full flex-col space-y-2 p-2'>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#262626]`}>Shipping Company</div>
    <Image height={100} width={100} src="/shipping_1.png" alt="company_image"/>
    <Image height={100} width={100} src="/shipping_2.png" alt="company_image"/>
    <Image height={100} width={100} src="/shipping_3.png" alt="company_image"/>
   

    </div>
    <div className=' w-full flex-col space-y-2 p-2'>
    <div style={{fontWeight:300}} className={`${jost.className} text-md text-[#030202]`}>Shipping Cost</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>Free</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>$15</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-sm text-[#262626]`}>$20</div>

   

    </div>
    
    </div>
  )
}

export default Table