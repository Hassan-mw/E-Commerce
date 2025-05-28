
import React, { useContext } from 'react'
import { DataContext } from '../[locale]/ContextApi/ContextApi'





const {brand,name,setLength}:any=useContext(DataContext)
 function FilteredProductDataByNavbarParams({data}){
    console.log(brand,name,data)
    return  {name}

}


export {FilteredProductDataByNavbarParams}