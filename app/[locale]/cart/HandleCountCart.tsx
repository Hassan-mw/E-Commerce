'use client'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../ContextApi/ContextApi'
import { ParamValue } from 'next/dist/server/request/params'

interface DataType{
  count:number;
  setCount:any
}

const HandleCountCart = ({id,quantity,price}:{id:number,price:number,quantity:number}) => {
  const[data,setData]=useState(quantity) 
  const {count,setCount}=useContext<DataType>(DataContext)
 

       const sumPrice=data*price
       useEffect(()=>{
              // setCount(quantity)

     const handleUpdate=async()=>{
       try{
       const abc=  await axios.put(`http://localhost:5000/api/carts/${id}`,{quanitiy:data,sumPrice})
         }catch(err){
       console.log(err)
       }
        }
      handleUpdate()
     setCount(data)
       },[data])
  
       function handleCount(data:string){
        console.log(data,'@)_)(())_)(_)(_)(_(',count)
       if(data==='inc'){
       setData((pre)=>pre+1)
      }
      if(data==='dec'){
      if(count===1) return;
      setData((pre)=>pre-1)
      } }
   


 
  return (
<div className='flex items-center justify-center gap-x-4 px-2 py-1 border rounded-sm border-slate-200 text-[12px]'><span className='hover:cursor-pointer' onClick={()=>handleCount('dec')}>-</span><span>{quantity}</span> <span className='hover:cursor-pointer' onClick={()=>handleCount('inc')} >+</span></div>
  
  )
}

export default HandleCountCart