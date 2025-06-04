'use client'
import { Jost } from 'next/font/google'
import  { useContext, useEffect, useState } from 'react'
import { CiLock } from "react-icons/ci";

import { DataContext } from '../ContextApi/ContextApi';
import { getAllCarts } from '../API/Post/CreatePorduct';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const OrderSummary = () => {
    const {deletingId,count}=useContext(DataContext);
    const [data,setData]=useState([])
     const[giftpack,setGiftpack]=useState(0)
    const [shippingData,setShippingData]=useState([]) 
    const [paymentData,setPaymentData]=useState([]) 
    const [information,setInformation]=useState([]) 
    const [addGift,setAddGift]=useState(false) 
    const cartArrayId=data.map(el=>el.id)
    const productArrayId=data.map(el=>el.product_id)
    const date=new Date().toLocaleDateString();
  
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
 

   //handleGift 
   function handleFift(e:any){
    const checked=e.target.checked
    console.log(e.target.checked,'It reach')
    checked ? setGiftpack(10) : setGiftpack(0)
   }

    //Sum all produts prices 
    const arrayData=data.map((data:{productprice:number})=>data.productprice)
    let totalProductPriceSum=0;
    for(let i=0;i<arrayData.length;i++){
    totalProductPriceSum+=arrayData[i]
    }
   
    // Taking value out from array
    const {cost}=shippingData
    const [id,productid]=data
  
   //Calcuating the totals
    const totalPrice=totalProductPriceSum+cost+giftpack
  

      
     //Sending Order Data
    const handleOrder=async()=>{
      if(data.length===0) return;
      try{
        const sendorderData=await axios.post('http://localhost:5000/api/orders/1'
        ,{
          shipping_id:shippingData.id,product_id:productArrayId,
          cart_id:cartArrayId,total:totalPrice,created_at:date
        },
        {
        headers: {
        "Content-Type": "application/json",
        },
        withCredentials: true 
        })

      }catch(err){
        console.log(err)
        // console.log(err.response.status,'{{{{{{{{{{{{{{{{{{{{')

        // if(err.response.status===401){
        //   console.log('LLLLLLLLLLLLSDDDDDDDDDDDDDDDGGGGGGGGGG')
        //   toast.error('Login in for further continue')

        // }
      }
     }



  return (
    <div className='w-full md:max-h-80 md:w-[80%] lg:w-[40%] flex  items-center justify-center md:rounded-md bg-[#E9E9E9] p-4 '>
    <div className='w-full max-w-[60%] md:max-w-full flex flex-col  space-y-3 '>
     <Toaster position="top-center"  />
    <div className={`${jost.className} text-md`}>Order Summary</div>     
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Price</span><span>${totalProductPriceSum}</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Shipping</span><span>${cost}</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Tax</span><span>$0</span>  </div>    
    <div className='flex items-center justify-between text-sm'><span className='text-[#555555]'>Discount price</span><span>$0</span>  </div>    
    <div className='border-b pb-2 border-[#D9D9D9] flex items-center justify-between text-sm'><span className='text-[#555555] Data_Center gap-x-2'><input onClick={(e)=>handleFift(e)}  type='checkbox' /><span>Pack in a Gift Box</span></span><span>$5</span>  </div>    
     <div className='flex items-center justify-between text-sm font-semibold'><span >Total Price</span><span>${totalPrice}</span>  </div>    
     <div onClick={handleOrder} className='bg-[#434343] Data_Center gap-x-3 p-3 rounded-md text-white'>
     <CiLock  size={20} /><span>SHOP NOW</span>
     </div>
   
    </div> 
    </div>
  )
}

export default OrderSummary