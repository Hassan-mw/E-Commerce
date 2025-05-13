'use client'
import { Jost } from 'next/font/google'
import React, { useContext, useEffect, useState } from 'react'
const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
import { IoSearchOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { DataContext } from '../ContextApi/ContextApi';
import Link from 'next/link';
// import { useRouter } from 'next/';


interface DataType {

  name:{productName:string};
  brand:{brandName:string};
}


const ProductListSidebarData = ({category}:{category:string}) => {
  const [model,setModel]=useState('all')
  const [style,setStyle]=useState('all')
  const [color,setColor]=useState('all')
  const [size,setSize]=useState('all')
  const [price,setPrice]=useState('0')
  
  const searchParams=useSearchParams()
  const pathName=usePathname()
  const router=useRouter()
 

  useEffect(()=>{
    const params=new URLSearchParams(searchParams)

    if(model!=='all')  params.set('model',model); else params.delete('model');
    if(color!=='all')  params.set('color',color); else params.delete('color');
    if(style!=='all')  params.set('style',style); else params.delete('style');
    if(size!=='all')  params.set('size',size); else params.delete('size');
    if(price!=='0')  params.set('price',price); else params.delete('price');

    router.replace(`${pathName}?${params.toString()}`,{scroll:false})

  },[model,color,style,size,price])

  const modelArray=[
    {id:1,name:'All',url:'all'},
    {id:2,name:'Shorts',url:'shorts'},
    {id:3,name:'Mid-length',url:'mid-length'},
    {id:4,name:'Sweather',url:'sweather'},
    {id:5,name:'Party Dresses',url:'party-dresses'},
    {id:6,name:'Requlae Fit',url:'reqular-fit'}
  ]


  const styleArray=[
    {id:1,name:'All',url:'all'},
    {id:2,name:'Casual',url:'casual'},
    {id:3,name:'Bussiness Casual',url:'bussiness-casual'},
    {id:4,name:'Bohemian',url:'bohemian'},
    {id:5,name:'Zara',url:'zara'},
    {id:6,name:'Mango',url:'mango'}

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

  const handleColorChange=(data:string)=>{
    setColor(data)
  }
  
  const {brand,handleBrandName,name,handleProductName}=useContext(DataContext)
  function handleRemoveSelect(){
    console.log('It worked 123456789')
       handleProductName('')
       handleBrandName('')
       }
       console.log(brand.brandName,name.productName,'32633734734')

  return (
    <div className='w-full lg:w-[70%] h-full  flex flex-col items-start justify-start  space-y-12 sm:pb-8 lg:pb-3'> 
    {category!=='All' &&  <Link className='text-red-500 hover:text-red-600' href='/products/All'>Show All Products </Link>}   
   {
     name.productName!=='' && brand.brandName!==''
     &&(
    <div className='w-full flex flex-col items-start justify-start  '>
     <div style={{fontWeight:300}}  className={`text-xs text-slate-800`}><span className={`${jost.className} text-sm text-black`}>Name : </span> {name.productName} </div>
     <div style={{fontWeight:300}}  className={`text-xs text-slate-800 `}><span className={`${jost.className} text-sm text-black`}>Brand : </span>{brand.brandName}  </div>
     <div className='w-full flex items-center justify-center ' ><span className='w-full border border-[#e9e9e9]'></span> <span onClick={()=>handleRemoveSelect()} className='text-2xl pb-2 text-red-500 px-3 hover:cursor-pointer '>x</span><span className='w-full border border-[#e9e9e9]'></span></div>
    </div>
    )}
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
    <input value={data.url} onChange={()=>setModel(data.url)} name='model' type='radio' className='focus:outline-none size-4 placeholder:text-sm' placeholder='Search by brand '  /><span className='tetxt-xl'>{data.name}</span></div>
    )}
    </div>


    {/* Check box by Style */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Style</div>
      {
      styleArray.map((data,index)=>
        <div key={data.id} className=' w-full flex items-center justify-start gap-x-4'>
          <input value={data.url} onChange={()=>setStyle(data.url)}  type='radio' name='style' className='focus:outline-none size-4 placeholder:text-sm'  placeholder='Search by brand '  /><span className='tetxt-xl'>{data.name}</span></div>
       )}
       {/* <input type='checkbox' name='style' className='focus:outline-none size-4 placeholder:text-sm'   /><span className='tetxt-xl'>fjf</span> */}
    </div>


    {/*  box by color */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className={`${jost.className} text-xl`}>Color</div>
    <div className='w-full grid grid-cols-4 gap-x-3 gap-y-5'>
    <div onClick={()=>handleColorChange('all')}   className='hover:cursor-pointer'><Image height={23} width={25} src="/all_color.jpeg"  alt='all_color'/></div>
    <div  onClick={()=>handleColorChange('red')}       className={`hover:cursor-pointer size-6 rounded-full bg-red-500`}></div>
    <div  onClick={()=>handleColorChange('blue')}      className={`hover:cursor-pointer  size-6 rounded-full bg-blue-500`}></div>
    <div  onClick={()=>handleColorChange('white')}     className='hover:cursor-pointer size-6 rounded-full border border-slate-300 bg-white'></div>
    <div  onClick={()=>handleColorChange('purple')}    className={`hover:cursor-pointer  size-6 rounded-full bg-purple-500`}></div>
    <div  onClick={()=>handleColorChange('orange')}    className={`hover:cursor-pointer  size-6 rounded-full bg-orange-500`}></div>
    <div  onClick={()=>handleColorChange('pink')}      className={`hover:cursor-pointer  size-6 rounded-full bg-pink-500`}></div>
    <div  onClick={()=>handleColorChange('gray')}      className={`hover:cursor-pointer  size-6 rounded-full bg-gray-500`}></div>
    <div  onClick={()=>handleColorChange('green')}      className={`hover:cursor-pointer  size-6 rounded-full bg-green-500`}></div>
    <div  onClick={()=>handleColorChange('yellow')}      className={`hover:cursor-pointer  size-6 rounded-full bg-yellow-500`}></div>
    <div  onClick={()=>handleColorChange('black')}      className={`hover:cursor-pointer  size-6 rounded-full bg-black`}></div>
    <div  onClick={()=>handleColorChange('amber')}      className={`hover:cursor-pointer  size-6 rounded-full bg-amber-500`}></div>
    {/* <div  onClick={()=>handleColorChange('black')}     className='hover:cursor-pointer size-6 rounded-full bg-black'></div> */}
    </div>
  
    </div>


    {/*  box by Size */}
    <div className='w-full flex flex-col space-y-2 border-b pb-3 border-slate-300'>
    <div className='flex items-center justify-between '>
    <div className={`${jost.className} text-xl`}>SIZE</div>
     <div onClick={()=>setSize('all')} className={`${jost.className} border border-slate-200 text-[#555555] hover:cursor-pointer ${size==='all' ? 'bg-[#D1E2EB]' : 'bg-while'} hover:bg-[#D1E2EB] duration-200 flex items-center justify-center  px-3 rounded-sm`}>All</div>
      
    </div>
   
    <div className='w-full grid grid-cols-4 gap-x-3 gap-y-5'>
      {
       sizeArray.map((data,index)=>
      <div onClick={()=>setSize(data.url)} key={data.id} className={`${jost.className} border border-slate-200 text-[#555555] hover:cursor-pointer ${size===data.url ? 'bg-[#D1E2EB]' : 'bg-while'} hover:bg-[#D1E2EB] duration-200 flex items-center justify-center  px-2 py-1 rounded-sm`}>{data.name}</div>
       )
      }
 
    </div>
    </div>

    {/* Price */}
    <div className='w-full flex flex-col space-y-2  border-slate-300 pb-12 '>
    <div className={`${jost.className} text-xl`}>PRICE</div>
      <div className='w-full flex flex-col space-y-3'>
        <div><input value={price}  onChange={(e)=>setPrice(e.target.value)} type='range' min='0' max='60' className='w-full'/></div>

      </div>
  
    </div>



    </div>
  )
}

export default ProductListSidebarData