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
    <div className='w-full grid grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10 lg:gap-x-24  p-5'>
    {/* 1 */}
    <div className={`${jost.className} flex flex-col items-start justify-start space-y-3` }>
    <div className={`${jost.className} text-xl lg:text-2xl text-[#262626]`}>Product Description</div>
    <div style={{fontWeight:300}} className={`${jost.className} text-[#555555] text-sm md:text-md  lg:text-lg`}> {prodcutdetails} </div>
    </div>

    {/* 2 */}
    <div className={`${jost.className} flex flex-col items-start justify-start  space-y-3`}>
    <div className={`${jost.className} text-xl text-[#262626]`}>Composition</div>
    <div style={{fontWeight:200}} className={`${jost.className} text-[#555555]  text-sm md:text-md  lg:text-lg`}> We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our products. To assess compliance, we have developed a programme of audits and continuous improvement plans.OUTER SHELL90% cotton10% linen</div>
    </div>


    {/* 3 */}
    <div className={`${jost.className} flex flex-col items-start justify-start  space-y-3`}>
    <div className={`${jost.className} text-xl text-[#262626] `}>Product Description</div>
    <div className="flex flex-col space-y-3">
    {
     details.map((data,index)=>
    <div key={index} className="w-full">
    {/* <div >  <LuDot /></div> */}
    <span style={{fontWeight:200}} className={`${jost.className} text-[#555555] flex items-start justify-start space-x-0.5 text-sm md:text-md  lg:text-lg`}> <span className="text-lg text-black md:pt-1"><LuDot /></span> {data}</span></div>
    )}
    </div>
    </div>


    {/* 4 */}
    <div className={`${jost.className} flex flex-col items-start justify-start  space-y-3`}>
    <div className={`${jost.className} text-xl text-[#262626]`}>Care instructions</div>
    <div className='flex flex-col space-y-2 text-[#555555]'>
    <div className='w-full flex itemce space-x-1 justify-start lg:items-center'><MdWaterDrop /><span style={{fontWeight:200}} className={`${jost.className}   text-sm md:text-md  lg:text-lg`}>Machine wash at max. 30ºC/86ºF with short spin  .</span></div>
    <div className='w-full flex itemce space-x-1 justify-start lg:items-center'><MdIron /><span style={{fontWeight:200}} className={`${jost.className}   text-sm md:text-md  lg:text-lg`}>Iron at a maximum of 110ºC/230ºF .</span></div>
    <div className='w-full flex itemce space-x-1 justify-start lg:items-center'><PiHairDryerFill /><span style={{fontWeight:200}} className={`${jost.className}   text-sm md:text-md  lg:text-lg`}>Do not dry clean .</span></div>
    <div className='w-full flex itemce space-x-1 justify-start lg:items-center'><PiWashingMachineFill /><span style={{fontWeight:200}} className={`${jost.className}   text-sm md:text-md  lg:text-lg`}>Wash inside out .</span></div>
    <div className='w-full flex itemce space-x-1 justify-start lg:items-center'><FaTshirt /><span style={{fontWeight:200}} className={`${jost.className}   text-sm md:text-md  lg:text-lg`}>Wash separately .</span></div>
   
    </div>
    </div>
    </div>
  )
}

export default ProductDetail