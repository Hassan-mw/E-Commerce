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
   const [brand,setBrand]=useState<DataTypeBrand>({brandName:"all"})
   const [name,setName]=useState<DataTypeProduct>({productName:""})
   
   function handleBrandName(data:string){  
    setBrand({brandName:data})
   }
   function handleProductName(data:string){
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