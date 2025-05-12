'use client';


import { useContext, useState } from "react";
import { createContext } from "react";


const DataContext=createContext({
  brand:""
})

 const initialState={brand:'all'}

interface DataType {
    brand:string;
    setBrand: any
}

function DataProvider({children}:{children:React.ReactNode}){
   const [brand,setBrand]=useState<DataType>('all')
   const [name,setName]=useState<DataType>('')

  return(
    <DataContext.Provider value={{brand,setBrand,name,setName}}>
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