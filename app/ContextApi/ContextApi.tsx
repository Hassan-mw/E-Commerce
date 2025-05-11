'use client';


import { useContext, useState } from "react";
import { createContext } from "react";

interface DataTYpe{
    model:string;

}

const DataContext=createContext({ 
    data:""
 })

function DataProvider({children}:{children:React.ReactNode}){
     const [model,setModel]=useState('all')
   
  return(
    <DataContext.Provider value={{model,setModel}}>
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