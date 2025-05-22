import { Jost } from 'next/font/google'
import  { useContext, useEffect, useState } from 'react'
import { CiLock } from "react-icons/ci";

import { DataContext } from '../ContextApi/ContextApi';
import { getAllCarts } from '../API/Post/CreatePorduct';
import axios from 'axios';
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const OrderSummary = () => {
    const {deletingId,count}=useContext(DataContext);
    const [data,setData]=useState([])
    const[giftpack,setGiftpack]=useState('0')
    const [shippingData,setShippingData]=useState([]) 
    const [paymentData,setPaymentData]=useState([]) 
    const [information,setInformation]=useState([]) 
    console.log(giftpack)
     //Fetching all cart
      useEffect(()=>{
    
           const fetData=async()=>{
           const cartData=await getAllCarts()  
           
           setData(cartData)
       
           }
         
           fetData()
      },[deletingId,count])
 


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


    const arrayData=data.map((data:{productprice:number})=>data.productprice)
    let totalProductPriceSum=0;
    for(let i=0;i<arrayData.length;i++){

    totalProductPriceSum+=arrayData[i]

    }

    const {cost}=shippingData
    console.log(cost,33333333333344444444444444444444)
  
     const totalPrice=totalProductPriceSum+cost
  

  return (
    <div className='w-full md:max-h-80 md:w-[80%] lg:w-[40%] flex  items-center justify-center md:rounded-md bg-[#E9E9E9] p-4 '>
    <div className='w-full max-w-[60%] md:max-w-full flex flex-col  space-y-3 '>
    <div className={`${jost.className} text-md`}>Order Summary</div>     
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Price</span><span>${totalProductPriceSum}.23</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Shipping</span><span>${cost}</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Tax</span><span>$0</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Discount price</span><span>$47.10</span>  </div>    
    <div className='border-b pb-2 border-[#D9D9D9] flex items-center justify-between text-sm'><span className='text-[#555555] flex items-center justify-center gap-x-2'><input checked={giftpack==='5' && true} onChange={()=>setGiftpack('5')} type='checkbox' /><span>Pack in a Gift Box</span></span><span>$5</span>  </div>    
     <div className='flex items-center justify-between text-sm font-semibold'><span >Total Price</span><span>${totalPrice}</span>  </div>    
     <div className='bg-[#434343] flex items-center justify-center gap-x-3 p-3 rounded-md text-white'>
     <CiLock  size={20} /><span>SHOP NOW</span>
     </div>
   
    </div> 
    </div>
  )
}

export default OrderSummary