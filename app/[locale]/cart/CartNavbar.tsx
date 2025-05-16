'use client'
import React, { useState } from 'react'
import Cart from './CartSections/Cart'

import ShippingPayment from './CartSections/ShippingPayment'
import ProductConfirmation from './CartSections/ProductConfirmation'
import { Jost } from 'next/font/google'
import CustomerInformation from './CartSections/CustomerInformation'

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const CartNavbar = () => {

  const [currentDetails,setCurrentDetails]=useState('Cart')
            const data=[
                {id:1,name:'Cart'},
                {id:2,name:'Customer Info'},
                {id:3,name:'Shipping & Payment'},
                {id:4,name:'Product Confirmation'}
            ]


          return (
            <div className="w-full  flex flex-col space-y-10 items-center justify-center gap-x-6 py-6 ">
            <div className="w-full flex  items-center justify-center gap-x-6 border-b pb-3 border-[#D9D9D9]">
                {
                    data.map((data,index)=>
                        <div key={data.id} onClick={()=>setCurrentDetails(data.name)} style={{fontWeight:400}} className={` ${currentDetails===data.name ? 'text-[#262626]' : 'text-[#9D9D9D]'  }  duration-300 hover:cursor-pointer text-sm font-semibold  `}>{data.name}</div>
                    )
                    }
            </div>
           
            {currentDetails==='Cart' && <Cart />}
            {currentDetails==='Customer Info' && <CustomerInformation/>}
            {currentDetails==='Shipping & Payment' && <ShippingPayment/>}
            {currentDetails==='Product Confirmation' && <ProductConfirmation/>}

            
            </div>
  
  )
}

export default CartNavbar