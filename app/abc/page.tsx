import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full items-center justify-center'>
        <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 p-24 border'>

        <Image height={200} width={200} src={`/product_1745603506140-1.jpeg`} className='object-cover w-full h-full  shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' />
        <Image height={200} width={200} src={`/product_1745603506140-1.jpeg`} className='object-cover w-full h-full  shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' />
        <Image height={200} width={200} src={`/product_1745603506140-1.jpeg`} className='object-cover w-full h-full  shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' />
        <Image height={200} width={200} src={`/product_1745603506140-1.jpeg`} className='object-cover w-full h-full  shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' />
        </div>
        
    </div>
  )
}

export default page