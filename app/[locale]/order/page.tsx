import { Jost } from "next/font/google"
import { MdKeyboardArrowRight } from "react-icons/md"
import { getAllFromCart } from "../API/GET/FetchAllCartsData"
import OrderData from "./OrderData"
import { getAllFromPaymentById } from "../API/GET/Payment"
import { getAllFromShippingById } from "../API/GET/Shipping"


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const page = async() => {


  
  const cartData=await getAllFromCart();
  const paymentData=await getAllFromPaymentById();
  const shippingData=await getAllFromShippingById();
  const customerData=await getAllCustomerInfo();

  return (
  <div className='w-full flex items-center justify-center '>
     <div className='max-w-screen-lg md:max-w-3xl lg:max-w-screen-xl w-full flex flex-col items-center justify-center  space-y-1 pb-14'>
       {/* Current Page showing */}
      <div className='w-full flex  px-5 pt-3 items-start justify-start space-x-3 '>
       <span style={{fontWeight:300}} className={` ${jost.className} flex items-center text-sm justify-center text-[#555555]`}>Homepage <MdKeyboardArrowRight size={20} /></span>
       <span className={` ${jost.className} flex items-center justify-center  text-sm text-[#555555]`}>Order</span>
      </div>
   
      {/* Data */}
    

      <OrderData cartData={cartData} paymentData={paymentData} shippingData={shippingData} />
    </div>
    </div>
  )
}

export default page