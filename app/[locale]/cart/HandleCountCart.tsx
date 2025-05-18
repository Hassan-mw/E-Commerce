'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HandleCountCart = ({id}:{id:number}) => {
    const [count,setCount]=useState(1)
    
    useEffect(()=>{
     const handleUpdate=async()=>{
              try{
              const data=  await axios.put(`http://localhost:5000/api/carts/${id}`,{quanitiy:count})
              }catch(err){
              console.log(err,'55555555555555555555555555555555')
              }
              }
              handleUpdate()
    },[count])


    function handleCount(data:string){
     if(data==='inc'){
      setCount((pre)=>pre+1)
     }
     if(data==='dec'){
     if(count===1) return;
      setCount((pre)=>pre-1)
     }

     }
  return (
<div className='flex items-center justify-center gap-x-4 px-2 py-1 border rounded-sm border-slate-200 text-[12px]'><span onClick={()=>handleCount('dec')}>-</span><span>{count}</span> <span  onClick={()=>handleCount('inc')} >+</span></div>
  
  )
}

export default HandleCountCart