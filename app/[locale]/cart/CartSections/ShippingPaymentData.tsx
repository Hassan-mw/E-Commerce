'use client'
import axios from 'axios'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const shippingArray=[
  {id:"AUSFF",time:"14-21 days",cost:0,insurance:false,image:"shipping_company_1.png",name:"shippingmethod"},
  {id:"RaceCourieser ",time:"12-18 days",cost:0,insurance:true,image:"shipping_company_2.png",name:"shippingmethod"},
  {id:"TranscoCargo",time:"8-14 days",cost:50,insurance:true,image:"shipping_company_3.png",name:"shippingmethod"},
]

const ShippingPaymentData = () => {
 const [paymentMethod,setPaymentMethod]=useState('')
 const [paymentStatus,setPaymentStatus]=useState('')
 const [paymentData,setPaymentData]=useState({method:''})
 const [shippingMethod,setShippingMethod]=useState('')
 const [shippingStatus,setShippingStatus]=useState('')
 const [shippingData,setShippingData]=useState({name:''})
 console.log(shippingData)


 ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
  //Handle payment Changes
  function handlePayment(e:any){
  const {id}=e.target;
  setPaymentMethod(id)
  if(paymentStatus==='success'){
    setPaymentData({method:id})
  }
  }

  //Handle Shipping Changes
  function handleShipping(e:any){
  const {id}=e.target;
  setShippingMethod(id)
  if(shippingStatus==='success'){
  setShippingData({name:id})
  }
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
  // Sending payment data
   const handlePaymentForm=async()=>{
      try{
    const data=await axios.post('http://localhost:5000/api/payment/1',
      {
     method:paymentMethod
      
      }
     )}catch(err){
      console.log(err)
     }
  }

    
  // Sending shipping data
   const handleShippingForm=async()=>{
     try{
    const [filteredData]=shippingArray.filter((data)=>data.id===shippingMethod)
    const {id,insurance,time,cost}=filteredData
    console.log(id,insurance,time)
    const data=await axios.post('http://localhost:5000/api/shipping/1',
      {
      name:id,
      cost,
      time,
      insurance
      }
     )}catch(err){
      console.log(err)
     }
  }

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  // fetching payment data
  useEffect(()=>{
    const fetchingPayment=async()=>{

    const response=await axios.get('http://localhost:5000/api/payment/1')
    const {status,data}=response.data
    setPaymentStatus(status)
    setPaymentData({method:data.method})
  
    }
  fetchingPayment()
  },[])

    
  // fetching shipping data
  useEffect(()=>{
   const fetchShippingData=async()=>{
    try{
    const response=await axios.get('http://localhost:5000/api/shipping/1')
         const {status,data}=response.data
    setShippingStatus(status)
    setShippingData({name:data.name})
    }catch(err){
    console.log(err)
    }
  }
  fetchShippingData()
  },[])

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////


  // handlePaymentFormChanges (UPDATE)
  const handlePaymentFormChanges=async()=>{
  try{
    const x=await axios.put('http://localhost:5000/api/payment/1',{method:paymentData.method })   
    }  
   catch(err){
   console.log(err)
   }
   }


  // handleShippingFormChanges(UPDATE)
  const handleShippingFormChanges=async()=>{
         try{
    const [filteredData]=shippingArray.filter((data)=>data.id===shippingMethod)
    console.log(filteredData)
    const {id,insurance,time,cost}=filteredData
    console.log(id,insurance,time)
    const data=await axios.put('http://localhost:5000/api/shipping/1', {name:id,cost,time,insurance}
     )}catch(err){
      console.log(err)
     }
  }
  // try{
  //   const x=await axios.put('http://localhost:5000/api/shipping/1',{method:shippingData.method })   
  //   }  
  //  catch(err){
  //  console.log(err)
  //  }
  //  }



  return (
       <div className='w-full   flex flex-col space-y-16 px-5'>
   {/* //!   P A Y M E N T */}
    <div className='w-full flex flex-col space-y-8 '>
    <div className='flex flex-col items-start justify-start space-y-1'>
    <div className='text-xl font-semibold'>Payment</div>
    <div className='text-xs text-[#555555]'>Pleease choose a payment method</div>
    </div>

   {/* 1 */}
  <div className='w-full flex items-start justify-between p-4 border border-slate-200 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input checked={paymentData.method==='payPal' ?true :false}  value={paymentStatus==='success'? paymentData:paymentMethod} onChange={(e)=>handlePayment(e)} id='payPal' className='border-[#D9D9D9]   size-4' name="paymentmethod" type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>Paypal</div>
   <div className='text-xs text-[#555555]'>PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.</div>
  </div>
   </div>
   {/* Right */}
   <Image height={50} width={50}  className="object-contain"  src="/Paypal_method.png" alt="paypal_methoad" />
  </div>
    
   {/* 2 */}
  <div className='w-full flex items-start justify-between p-4 border border-slate-200 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'>  <input checked={paymentData.method==='mastercard' ?true :false} value={paymentStatus==='success'? paymentData:   paymentMethod}  id='mastercard' onChange={(e)=>handlePayment(e)} className='border-[#D9D9D9]   size-4' name="paymentmethod" type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>Mastercard</div>
   <div className='text-xs text-[#555555]'>Mastercard is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.</div>
  </div>
   </div>
   {/* Right */}
   <Image height={40} width={40}  className="object-contain"  src="/mastercard_image_shipping.png"  alt="mastercard_methoad" />
  </div>
    

   {/* 3 */}
  <div className='w-full flex items-start justify-between p-4 border border-slate-200 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'>  <input  checked={paymentData.method==='bitcoin' ?true :false} value={paymentStatus==='success'? paymentData:   paymentMethod} id="bitcoin" onChange={(e)=>handlePayment(e)} className='border-[#D9D9D9]   size-4' name="paymentmethod" type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>Bitcoin</div>
   <div className='text-xs text-[#555555]'>Bitcoin is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.</div>
  </div>
   </div>
   {/* Right */}
   <Image height={50} width={50}  className="object-contain"  src="/bitcoin_method.png"  alt="bitcoin_methoad" />
  </div>

 {
 paymentStatus==='success' ?
  <div className="w-full flex items-center justify-center "><div onClick={handlePaymentFormChanges} className="w-36  flex items-center justify-center text-sm text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 duration-500 p-1 rounded-xl ">Submit Changes</div></div>
  :
  paymentMethod!=='' && <div className="w-full flex items-center justify-center "><div onClick={handlePaymentForm} className="w-24  flex items-center justify-center text-sm text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 duration-500 p-1 rounded-xl ">Submit</div></div>

  }

    </div>



    {/* //! S H I P P I N G */}
    <div className='w-full flex flex-col space-y-8 '>
    <div className='flex flex-col items-start justify-start space-y-1'>
    <div className='text-xl font-semibold'>Shipping</div>
    <div className='text-xs text-[#555555]'>Please choose a shipping company based on your region</div>
    </div>


   {/* 1 */}
 { 
  shippingArray.map((data,index)=>
  <div key={data.id} className='w-full flex items-start border border-slate-200 justify-between p-4 rounded-md bg-[#F5F5F5]'>
   {/* Left */}
   <div className='flex items-start justify-start gap-x-3 '>
    <div className='pt-1'> <input checked={shippingData.name===data.id ?true :false} value={shippingStatus==='success'? shippingData:shippingMethod}   onChange={(e)=>handleShipping(e)} id={data.id} className='border-[#D9D9D9]   size-4' name="shippingmethod" type='radio'/></div>
  <div className='flex flex-col items-start justify-start'>
   <div className='text-md font-semibold pb-2  text-[#262626]'>{data.id}</div>
   <div className='text-[10px] text-[#555555]'>Delivery time: {data.time}</div>
   <div className='text-[10px]  text-[#555555]'>Shipping cost : {data.cost===0 ? 'Free' :data.cost+'$'}</div>
   <div className='text-[10px]  text-[#555555]'>Insurance : <span className={`${data.insurance ? 'text-[#00A95D]' : 'text-[#FF2E00]'} `}> {data.insurance ? 'Avaliable'  : 'Unavaliable' }</span></div>
  </div>
   </div>
   {/* Right */}
   <Image height={70} width={70} className="object-contain" src={`/${data.image}`} alt="paypal_methoad" />  
  </div>
  
  )}
    

    

 {/* { shippingMethod!=='' && <div className="w-full flex items-center justify-center "><div onClick={handleShippingForm} className="w-24  flex items-center justify-center text-sm text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 duration-500 p-1 rounded-xl ">Submit</div></div>} */}
   
  {
  shippingStatus==='success' ?
  <div className="w-full flex items-center justify-center "><div onClick={handleShippingFormChanges} className="w-36  flex items-center justify-center text-sm text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 duration-500 p-1 rounded-xl ">Submit Changes</div></div>
  :
  shippingMethod!=='' && <div className="w-full flex items-center justify-center "><div onClick={handleShippingForm} className="w-24  flex items-center justify-center text-sm text-white hover:cursor-pointer bg-blue-600 hover:bg-blue-700 duration-500 p-1 rounded-xl ">Submit</div></div>
  }

  

    </div>

    </div>
    
 ) }

export default ShippingPaymentData