import { ChildProcess } from "child_process";

export interface ButtonDataTYpe{
    style:string;
    children:string;
    href:string
}

/////////////////////////
interface AboutCategorySubDataType{
      
     id:number;
    title:string;
    belowTitle:string;
    image:string;
    style:string;
    color:String;
}
export interface AboutCategoryDataTYpe{
data:AboutCategorySubDataType[ ]
}
///////////////////////////
export interface  TopNumberProduct{
brand:string;
color:string;
details:string[];
discord:number;
id:number;
images:string[];
main_image:string;
model:string;
name:string;
price:number;
prodcutdetails:string;
rating:number | null ;
ratingnumber:number;
shortdetail:string;
size:string;
style:String;

}
export interface TopNumberProductDataType{
   
    data:TopNumberProduct[]
}
////////////////////

export interface ProductDetailsDataType{
    images:string[];
    id:number;
    name:string;
    price:number;
    color:string;
    quantity:number;
    size:number
}

//////////////////

export interface producutDetailsDataType{

    details:string[];
    shortdetail:string;
    prodcutdetails:string;

}