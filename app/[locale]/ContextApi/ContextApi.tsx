'use client';


import { Dispatch, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";
import { TopNumberProductCart } from "../Types/dataType";

interface BrandDataType{
  brandName:string;
}

interface DataType {
  count: number;
  setCount: (count: number) => void;
  deletingId:number;
  setDeletingId:Dispatch<SetStateAction<number>>;
  cartData:TopNumberProductCart[];
  setCartData:Dispatch<SetStateAction<TopNumberProductCart[]>>;
  currentCurrency:string;
  setCurrentCurrency:Dispatch<SetStateAction<string>>;
  brand:BrandDataType;
  length:number;
  setLength:Dispatch<SetStateAction<number>>;
  handleBrandName:(data:string)=>void;
  handleProductName:(data: string) => void;
  setBrand:Dispatch<SetStateAction<DataTypeBrand>>;
  name:DataTypeProduct;
  setName:Dispatch<SetStateAction<DataTypeProduct>>;
  cartLength:number
  setCartLength:Dispatch<SetStateAction<number>>;
  orderLength:number
  setOrderLength:Dispatch<SetStateAction<number>>;
}


 const DataContext=createContext<DataType>({});

 const initialState={brand:'all'}

interface DataTypeBrand {
    brandName:string;
}
interface DataTypeProduct {
    productName:string;
}



function DataProvider({children}:{children:React.ReactNode}){
    const [deletingId,setDeletingId]=useState(0)
    const [name,setName]=useState<DataTypeProduct>({productName:""})
    const [brand,setBrand]=useState<DataTypeBrand>({brandName:""})
    const [length,setLength]=useState<number>(0)
    const [count,setCount]=useState<number>(0)
    const [cartLength,setCartLength]=useState<number>(0)
    const [orderLength,setOrderLength]=useState<number>(0)
    const [favouriteLength,setFavouriteLength]=useState<number>(0)
    const [currentCurrency,setCurrentCurrency]=useState('1_$')
    const [cartData,setCartData]=useState([])
      
   function handleBrandName(data:string){  
    setBrand({brandName:data})
   }

   function handleProductName(data:string){
    setName({productName:data})
   }
    
  return(
    <DataContext.Provider value={{orderLength,setOrderLength,favouriteLength,setFavouriteLength,deletingId,setDeletingId,count,setCount,cartData,setCartData,currentCurrency,setCurrentCurrency,brand,length,setLength,handleBrandName,handleProductName,setBrand,name,setName,cartLength,setCartLength}}>
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