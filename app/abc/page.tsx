import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-full h-full flex items-center justify-center max-w-screen-lg'>
        <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 p-24 border'>

        <Image height={300} width={3000} src={`/product_1745603108048.jpg`} className='object-contain max-h-[400px] w-full h-full  shadow-2xl border border-slate-200 object-center rounded-t-md' alt='product_image' />
        <Image height={300} width={30000} src={`/product_1745606831633.jpg`} className='object-contain  max-h-[400px] w-full h-full  shadow-2xl border border-slate-200 object-center rounded-t-md' alt='product_image' />
        <Image height={200} width={200} src={`/product_1745603506140-1.jpeg`} className='object-cover w-full h-full  shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' />
        <Image height={200} width={200} src={`/product_1745603506140-1.jpeg`} className='object-cover w-full h-full  shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' />
        {/* <Image height={200} width={200} src={`/product_1745603506140-1.jpeg`} className='object-cover w-full h-full  shadow-2xl border border-slate-200 object-top rounded-t-md' alt='product_image' /> */}
        </div>
        
    </div>
    </div>
  )
}

export default page