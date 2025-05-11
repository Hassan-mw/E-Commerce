'use client';


import { useContext, useState } from "react";
import { createContext } from "react";


const DataContext=createContext({ 
    data:""
 })

function DataProvider({children}:{children:React.ReactNode}){
   const [data,setData]=useState<string>('adfdfhdfll')
  return(
    <DataContext.Provider value={{data,setData}}>
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