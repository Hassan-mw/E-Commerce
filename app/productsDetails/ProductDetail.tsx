import { Jost } from 'next/font/google'
import { GoDotFill } from 'react-icons/go'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import { LuDot } from "react-icons/lu";
import { producutDetailsDataType } from '../Types/dataType';

const ProductDetail = ({details,shortdetail,prodcutdetails}:producutDetailsDataType) => {
    console.log(details,'🚈🛹🦼🦼🦽🦽🚍🚍')
  return (
    <div className='w-full grid grid-cols-2 gap-8 p-5'>
    {/* 1 */}
    <div className={`${jost.className} flex flex-col items-start justify-start`}>
    <div className={`${jost.className} text-xl`}>Product Description</div>
    <div style={{fontWeight:200}} className={`${jost.className} text-[#7c7979] text-xs`}> {prodcutdetails} </div>
    </div>
    {/* 2 */}
    <div className={`${jost.className} flex flex-col items-start justify-start`}>
    <div className={`${jost.className} text-xl`}>Composition</div>
    <div style={{fontWeight:200}} className={`${jost.className} text-[#7c7979] text-xs`}> We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans.OUTER SHELL90% cotton10% linen</div>
    </div>
    {/* 3 */}
    <div className={`${jost.className} flex flex-col items-start justify-start`}>
    <div className={`${jost.className} text-xl`}>Composition</div>
    {
     details.map((data,index)=>
    <div key={index} style={{fontWeight:200}} className="w-full flex items-start justify-start gap-x-1">
       <div >  <LuDot /></div>
        <span className={`${jost.className}  text-[#7c7979] text-xs`}> {data}</span></div>
    )}
    </div>
    </div>
  )
}

export default ProductDetail