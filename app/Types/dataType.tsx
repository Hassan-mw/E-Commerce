import { ChildProcess } from "child_process";

export interface ButtonDataTYpe{
    style:string;
    children:string;
    href:string
}

interface AboutCategorySubDataType{
      
     id:number;
    title:string;
    belowTitle:string;
    image:string;
    style:string;
    
}

export interface AboutCategoryDataTYpe{
 
    data:AboutCategorySubDataType[ ]
   
}

export interface TopNumberProductDataType{
    
}