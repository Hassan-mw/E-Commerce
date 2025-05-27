'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../ContextApi/ContextApi'
import { TopNumberProductCart } from '../../Types/dataType'
import axios from 'axios'
import EmptyCartData from '../EmptyCartData'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

interface DataType{
  cartData:TopNumberProductCart[];
}


const ProductConfirmationData = () => {
    const {cartData}=useContext<DataType>(DataContext)
    const [shippingData,setShippingData]=useState([]) 
    const [paymentData,setPaymentData]=useState([]) 
    const [information,setInformation]=useState([]) 
  console.log(information)


  // fetching shipping data
  useEffect(()=>{
   const fetchShippingData=async()=>{
    try{
    const response=await axios.get('http://localhost:5000/api/shipping/1')
         const {status,data}=response.data
  
    setShippingData(data)
  
    }catch(err){
    console.log(err)
    }
  }
  fetchShippingData()
  },[])

  // fetching payment data
  useEffect(()=>{
   const fetchShippingData=async()=>{
    try{
    const response=await axios.get('http://localhost:5000/api/payment/1')
         const {status,data}=response.data
  
    setPaymentData(data)
  
    }catch(err){
    console.log(err)
    }
  }
  fetchShippingData()
  },[])

  //fetching data
    useEffect(()=>{
      const fetchingAddress=async()=>{
      
      const response=await axios.get('http://localhost:5000/api/address/1')
      const {status,data}=response.data   
      setInformation(data)
  
  
    
      }
    fetchingAddress()
    },[])

  return (
        <div className='w-full flex items-center justify-center px-3'>
     {cartData.length>0 ?
        <div className='w-full flex flex-col space-y-5 bg-[#F5F5F5] rounded-md py-3 px-6'>
          <div className='text-xs text-[#4B5157]'>Shopping items</div>
            {/*Shipping Item  */}
           { cartData.map((data,index)=>
            <div key={index} className='w-full flex flex-col border-b pb-3 border-[#D9D9D9] '>
            {/* Upper */}
             <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-center  '>
            {/* Image+name */}
            <div className='flex  items-center justify-start gap-x-3 '>
            <div className='border py-1 px-2 rounded-sm border-slate-200 bg-white'> <Image height={20} width={20} src={`/${data.main_image}`} alt='Images' />   </div>
             {/* name + color */}
             <div className='flex flex-col items-start justify-start '>
             <div style={{fontWeight:400}} className={` text-xs`}>{data.name}</div>   
             <div className='flex items-center justify-center gap-x-1'><span className={`text-sm text-[#7B7B7B] `}>Color :</span><span className='size-3 rounded-full bg-yellow-500'></span> </div>   
    
             </div>
            </div>

            {/* name + color */}
             <div className=' flex w-full  items-center justify-center '>
             <div className='flex  items-start justify-start flex-col  pt-0 space-y-0'>
             <div style={{fontWeight:400}} className={` text-xs text-[#555555]`}>${data.price}</div>   
             <div className='flex items-center justify-center gap-x-1 text-xs'>x{data.quantity} </div>   
    
             </div>
             {/*Price  */}
            </div>   
            <span className={` text-sm flex sm:items-center sm:justify-center md:justify-start lg:justify-center  text-[#6e6d6d]`}>${data.productprice}</span>  
           
            </div>
            </div>
           )}
          

            {/*Payment - Method */}
            <div className='w-full flex flex-col space-y-2 border-b pb-3 border-[#D9D9D9] '>
            <div className='text-xs text-[#4B5157]'>Payment Method</div>
            <div className='w-full flex items-center justify-between'><div className='text-sm font-semibold'>{paymentData.method}</div>  <Image height={60} width={60}  className="object-contain"  src={`/${paymentData.image}`} alt="paypal_methoad" />
            </div> 
            </div>



            {/*Shipping - Company */}
            <div className='w-full flex flex-col space-y-3 border-b pb-5 border-[#D9D9D9] '>
            <div className='text-xs text-[#4B5157]'>Shipping Method</div>
            <div className='w-full flex items-center justify-between'><div className='text-sm font-semibold'>{shippingData.name}</div>   <Image height={60} width={60} className="object-contain" src={`/${shippingData.image}`} alt="paypal_methoad" />   </div> 

            <div className='w-full flex flex-col space-y-1 text-xs '>
            <div className='w-full flex flex-col space-y-2 '>
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Name</div>  <div className='text-[#262626] w-42'>{information.firstname} {information.lastname}</div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Country</div> <div className='text-[#262626] w-42'>  {information.country} </div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>City</div>  <div className='text-[#262626] w-42'> {information.state}</div> </div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Address</div> <div className='text-[#262626] w-42'> {information.address} </div> </div> 
            <div className='w-full flex items-center justify-between'><div className='text-xs text-[#555555]'>Phone</div>   <div className='text-[#262626] w-42'>{information.phone} </div> </div> 
            </div>

            </div>


            </div>
           :  
              <EmptyCartData/>
             }
    
    
          
        </div>
  )
}

export default ProductConfirmationData