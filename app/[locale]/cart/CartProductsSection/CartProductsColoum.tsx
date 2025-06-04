'use client'
import { Jost } from 'next/font/google'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { CiTrash } from 'react-icons/ci'
import { DataContext } from '../../ContextApi/ContextApi'
import { deleteCurrentCart } from '../../API/GET/DeletingCart'
import axios from 'axios'
import { getAllCarts } from '../../API/Post/CreatePorduct'
import { cartDataType, TopNumberProduct, TopNumberProductCart, TopNumberProductDataType } from '../../Types/dataType'
import HandleCountCart from '../HandleCountCart'
import EmptyCartData from '../EmptyCartData'


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
interface DataType{
  count:number;
  cartData:TopNumberProductCart[];
  setCartLength:any
  setCartData:any;
  deletingId:number;
  setDeletingId:any
}

const CartProductsColoum = () => {
  // const [cartData,setCartData]=useState([])
  // const [count,setCount]=useState(1)
  const [loading,setLoading]=useState(true)
  const {setCartLength,cartData,setCartData,count,deletingId,setDeletingId}=useContext<DataType>(DataContext)



    // Storing cart length
    useEffect(()=>{
    setCartLength(cartData.length)
    },[cartData])

      
    //Fetching all cart
    useEffect(()=>{
    setLoading(true)
    const fetData=async()=>{
    const cartData=await getAllCarts()  
    
    setCartData(cartData)

    }
    setLoading(false)
    fetData()
    },[deletingId,count])


    // Deleting the cart
    useEffect(()=>{
    const handleDelete=async()=>{
    const data=  await axios.delete(`http://localhost:5000/api/carts/${deletingId}`)
     }
    handleDelete()
    setDeletingId(0)
    },[deletingId])
        
       
 
 
  return (
    <div className='w-full flex flex-col space-y-5 px-5'>
      <div className='text-md font-semibold'>Card - {cartData.length}</div>
      {cartData.length===0 && <EmptyCartData/>}

       {loading ? <div>Loading...</div> :  cartData?.map((data,index)=>
        <div key={index} className='w-full flex flex-col lg:flex-row lg:space-x-7 lg:space-y-0 space-y-3 lg:items-start lg:justify-start'>
        {/* Upper */}
         <div className='w-full flex items-start justify-between  '>
        {/* Image+name */}
        <div className='flex items-start justify-start gap-x-3'>
        <div className='border py-1 px-2 rounded-sm border-slate-200'> <Image height={20} width={20} src={`/${data.main_image}`} alt='Images' />   </div>
         {/* name + color */}
         <div className='flex flex-col items-start justify-start pt-0 space-y-0'>
         <div style={{fontWeight:400}} className={` text-lg md:text-sm lg:text-md`}>{data.name}</div>   
         <div className='flex items-center justify-center gap-x-1'><span className={`text-sm text-[#7B7B7B] `}>Color :</span><span className={`size-3 rounded-full bg-${data.color}-500`}></span> </div>   

         </div>
        </div>
         {/*Price  */}
        <span className={` text-sm  text-[#6e6d6d]`}>${data.productprice}</span>  
        </div>   
        {/* Bottom */}
        <div className='w-full flex items-center justify-between'>
        {/* <div className='flex items-center justify-center gap-x-4 px-2 py-1 border rounded-sm border-slate-200 text-[12px]'><span onClick={()=>handleCount('dec')}>-</span><span>{count}</span> <span  onClick={()=>handleCount('inc')} >+</span></div> */}

        <HandleCountCart  quantity={data.quantity}  id={data.id}  price={data.price} />  
        <span className={` text-sm`}>${data.productprice}</span>  
        <span onClick={()=>setDeletingId(data.id)} className='text-[#7B7B7B] hover:cursor-pointer '><CiTrash size={20} /></span>
         
        </div>
        </div>
     

    )}
      
    </div>
  )
}

export default CartProductsColoum