import { Jost } from 'next/font/google'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


import { LuDot } from "react-icons/lu";
import { producutDetailsDataType } from '../Types/dataType';
import { MdIron, MdWaterDrop } from 'react-icons/md';
import { PiHairDryerFill, PiWashingMachineFill } from 'react-icons/pi';
import { FaTshirt } from "react-icons/fa";

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
    <div className={`${jost.className} flex flex-col items-start justify-start `}>
    <div className={`${jost.className} text-xl`}>Product Description</div>
    <div>
    {
     details.map((data,index)=>
    <div key={index} className="w-full flex items-start justify-start space-x-0.5">
    <div >  <LuDot /></div>
    <span style={{fontWeight:200}} className={`${jost.className}  text-[#7c7979] text-xs`}> {data}</span></div>
    )}
    </div>
    </div>


    {/* 4 */}
    <div className={`${jost.className} flex flex-col items-start justify-start `}>
    <div className={`${jost.className} text-xl`}>Care instructions</div>
    <div className='flex flex-col space-y-2 text-[#7c7979]'>
    <div className='w-full flex items-start space-x-1 justify-start'><MdWaterDrop /><span style={{fontWeight:200}} className={`${jost.className}  text-[#7c7979] text-xs`}>Machine wash at max. 30ºC/86ºF with short spin  .</span></div>
    <div className='w-full flex items-start space-x-1 justify-start'><MdIron /><span style={{fontWeight:200}} className={`${jost.className}  text-[#7c7979] text-xs`}>Iron at a maximum of 110ºC/230ºF .</span></div>
    <div className='w-full flex items-start space-x-1 justify-start'><PiHairDryerFill /><span style={{fontWeight:200}} className={`${jost.className}  text-[#7c7979] text-xs`}>Do not dry clean .</span></div>
    <div className='w-full flex items-start space-x-1 justify-start'><PiWashingMachineFill /><span style={{fontWeight:200}} className={`${jost.className}  text-[#7c7979] text-xs`}>Wash inside out .</span></div>
    <div className='w-full flex items-start space-x-1 justify-start'><FaTshirt /><span style={{fontWeight:200}} className={`${jost.className}  text-[#7c7979] text-xs`}>Wash separately .</span></div>
   
    </div>
    </div>
    </div>
  )
}

export default ProductDetail