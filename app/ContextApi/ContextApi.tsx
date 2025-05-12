'use client';


import { useContext, useState } from "react";
import { createContext } from "react";


const DataContext=createContext({})

 const initialState={brand:'all'}

interface DataTypeBrand {
    brandName:string;
}
interface DataTypeProduct {
    productName:string;
}



function DataProvider({children}:{children:React.ReactNode}){
    const [name,setName]=useState<DataTypeProduct>({productName:""})
   const [brand,setBrand]=useState<DataTypeBrand>({brandName:""})
   console.log(name,brand,'This is from contextApi')
   function handleBrandName(data:string){  
   console.log(data,'This is from contextApi--brandName')

    setBrand({brandName:data})
   }
   function handleProductName(data:string){
   console.log(data,'This is from contextApi--productName')

    setName({productName:data})
   }
    
  return(
    <DataContext.Provider value={{brand,handleBrandName,handleProductName,setBrand,name,setName}}>
    {children}
    </DataContext.Provider>
  )
}



function UseData(){
    const context=useContext(DataContext)
    if(context===undefined){
        console.error("Using Outside")
    }

    return context;
}


export {DataProvider,DataContext,UseData}