'use client';


import { useContext, useState } from "react";
import { createContext } from "react";


const DataContext=createContext({brand:''})

function DataProvider({children}:{children:React.ReactNode}){
   const [brand,setBrand]=useState<string>('all')

  return(
    <DataContext.Provider value={{brand,setBrand}}>
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