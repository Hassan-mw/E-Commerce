'use client';

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

import { Jost } from "next/font/google";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ReviewDetail from "./ReviewDetail";
import ShippingPaymentDetail from "./ShippingPaymentDetail";
import { producutDetailsDataType } from "../Types/dataType";

const DataDetails = ({details,shortdetail,prodcutdetails}:producutDetailsDataType) => {
    const [currentDetails,setCurrentDetails]=useState('PRODUCT DETAILS')
    const data=[
        {id:1,name:'PRODUCT DETAILS'},
        {id:2,name:'REVIEWS'},
        {id:3,name:'SHIPPING & PAYMENT'}
    ]
  return (
    <div className="w-full flex flex-col space-y-3 items-center justify-center gap-x-6 ">
    <div className="w-full flex  items-center justify-center gap-x-6 ">
        {
            data.map((data,index)=>
                <div key={data.id} onClick={()=>setCurrentDetails(data.name)} style={{fontWeight:400}} className={`${jost.className} ${currentDetails===data.name ? 'text-[#262626]' : 'text-[#9D9D9D]'  } hover:cursor-pointer text-sm ${jost.className} `}>{data.name}</div>
            )
            }
    </div>

    {currentDetails==='PRODUCT DETAILS' && <ProductDetail prodcutdetails={prodcutdetails} details={details} shortdetail={shortdetail} />}
    {currentDetails==='REVIEWS' && <ReviewDetail/>}
    {currentDetails==='SHIPPING & PAYMENT' && <ShippingPaymentDetail/>}
    </div>
  )
}

export default DataDetails