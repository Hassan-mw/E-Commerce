import { Jost } from "next/font/google"
import { MdKeyboardArrowRight } from "react-icons/md"
import CartData from "./CartData"
import { getAllFromCart } from "../API/GET/FetchAllCartsData"
import CartNavbar from "./CartNavbar"

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page = async() => {


  
  const cartData=await getAllFromCart();
  console.log(cartData,'ALAJFajhaheuhsegsigphsrghhsgshdjdej')
  return (
  <div className='w-full Data_Center '>
     <div className='max-w-screen-lg w-full flex flex-col items-center justify-center  space-y-10'>
       {/* Current Page showing */}
      <div className='w-full flex  p-6 items-start justify-start space-x-3 '>
       <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#555555]`}>Homepage <MdKeyboardArrowRight size={20} /></span>
       <span className={` ${jost.className} Data_Center  text-sm text-[#555555]`}>Cart</span>
      </div>
   
      {/* Data */}
      <CartNavbar   />

       {/* <CartData  cartData={cartData}  /> */}
    </div>
    </div>
  )
}

export default page