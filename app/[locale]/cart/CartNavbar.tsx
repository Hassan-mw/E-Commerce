'use client'
import React, { useState } from 'react'
import Cart from './CartSections/Cart'
import CustomerInfo from './CartSections/CustomerInfo'
import ShippingPayment from './CartSections/ShippingPayment'
import ProductConfirmation from './CartSections/ProductConfirmation'
import { Jost } from 'next/font/google'

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
            <div className="w-full flex  items-center justify-center gap-x-6 ">
                {
                    data.map((data,index)=>
                        <div key={data.id} onClick={()=>setCurrentDetails(data.name)} style={{fontWeight:400}} className={` ${currentDetails===data.name ? 'text-[#262626]' : 'text-[#9D9D9D]'  }  duration-300 hover:cursor-pointer text-xs  `}>{data.name}</div>
                    )
                    }
            </div>
           
            {currentDetails==='Cart' && <Cart />}
            {currentDetails==='Customer Info' && <CustomerInfo/>}
            {currentDetails==='SHIPPING & PAYMENT' && <ShippingPayment/>}
            {currentDetails==='ProductConfirmation' && <ProductConfirmation/>}
            </div>
  
  )
}

export default CartNavbar