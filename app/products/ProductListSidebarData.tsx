'use client'
import { Jost } from 'next/font/google'
import React, { useEffect, useState } from 'react'
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
import { IoSearchOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { useRouter } from 'next/';


const ProductListSidebarData = () => {
  const [model,setModel]=useState('all')
  const [style,setStyle]=useState('all')
  const [color,setColor]=useState('all')
  
  const searchParams=useSearchParams()
  const pathName=usePathname()
  const router=useRouter()
 
  useEffect(()=>{
    const params=new URLSearchParams(searchParams)

    params.set('abc',model)

    router.replace(`${pathName}?${params.toString()}`,{scroll:false})

  },[model])

  const modelArray=[
    {id:1,name:'Shorts',url:'shorts'},
    {id:2,name:'Mid-length',url:'mid-length'},
    {id:3,name:'Sweather',url:'sweather'},
    {id:4,name:'Party Dresses',url:'party-dresses'},
    {id:5,name:'Requlae Fit',url:'reqular-fit'}
  ]


  const styleArray=[
    {id:1,name:'Casual',url:'casual'},
    {id:2,name:'Bussiness Casual',url:'bussiness-casual'},
    {id:3,name:'Bohemian',url:'bohemian'},
    {id:4,name:'Zara',url:'zara'},
    {id:5,name:'Mango',url:'mango'}
  ]

  const colorArray=[
    {id:1,name:'green'},
    {id:2,name:'red'},
    {id:3,name:'blue'},
    {id:4,name:'yellow'},
    {id:5,name:'pink'},
    {id:6,name:'purple'}
  ]

  const sizeArray=[
    {id:1,name:'2XS',url:"2xs"},
    {id:2,name:'Xs',url:"xs"},
    {id:3,name:'S',url:"s"},
    {id:4,name:'M',url:"m"},
    {id:5,name:'L',url:"l"},
    {id:6,name:'XL',url:"xl"},
    {id:7,name:'2XL',url:"2xl"},
    {id:8,name:'3XL',url:"3xl"}
  ]

  

  return (
    <div className='w-full lg:w-[70%] h-full  flex flex-col items-start justify-start  space-y-12 '> 
    <div className='flex  items-center justify-center gap-x-3 '><div><BiCategory size={22} /></div><div className={`${jost.className} text-xl`}>All Categores</div></div>
    
    
    {/* Search by brand  */}
    <div className='w-full flex flex-col space-y-2 border-b pb-10 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Brand</div>
    <div className='border w-full rounded-md  border-slate-400 p-2 flex items-center justify-between'><input type='text' className=' focus:outline-none w-[70%]   placeholder:text-sm' placeholder='Search by brand '  /><span><IoSearchOutline /></span></div>
    </div>


    {/* Check box by model */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
     <div className={`${jost.className} text-xl`}>Model</div>
     {
     modelArray.map((data,index)=>
    <div key={data.id} className=' w-full flex items-center justify-start gap-x-4'>
      <input value={data.url} onChange={()=>setModel(data.name)} name='model' type='radio' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>{data.name}</span></div>
    )}
    </div>


    {/* Check box by Style */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Style</div>
      {
      styleArray.map((data,index)=>
        <div key={data.id} className=' w-full flex items-center justify-start gap-x-4'>
          <input type='radio' name='style' className='focus:outline-none size-4 placeholder:text-sm'  placeholder='Search by brand '  /><span className='tetxt-xl'>{data.name}</span></div>
       )}
       {/* <input type='checkbox' name='style' className='focus:outline-none size-4 placeholder:text-sm'   /><span className='tetxt-xl'>fjf</span> */}
    </div>


    {/*  box by color */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Brand</div>
    <div className='w-full grid grid-cols-4 gap-x-3 gap-y-5'>
    { 
    colorArray.map((data,index)=>
    <div key={data.id} className={` size-6 rounded-full bg-${data.name}-500`}></div>
    )}
   <div className='size-6 rounded-full border border-slate-300 bg-white'></div>
   <div className='size-6 rounded-full bg-black'></div>
    </div>
  
    </div>


    {/*  box by Size */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>SIZE</div>
    <div className='w-full grid grid-cols-4 gap-x-3 gap-y-5'>
      {
       sizeArray.map((data,index)=>
      <div key={data.id} className={`${jost.className} border border-slate-200 text-[#555555] hover:cursor-pointer hover:bg-[#D1E2EB] duration-200 flex items-center justify-center  px-2 py-1 rounded-sm`}>{data.name}</div>
       )
      }
 
    </div></div>


    {/* Price */}
    <div className='w-full flex flex-col space-y-2  border-slate-300'>
    <div className={`${jost.className} text-xl`}>PRICE</div>
      <div className='w-full flex flex-col space-y-3'>
        <div><input type='range' min='0' max='600' className='w-full'/></div>

      </div>
  
    </div>



    </div>
  )
}

export default ProductListSidebarData