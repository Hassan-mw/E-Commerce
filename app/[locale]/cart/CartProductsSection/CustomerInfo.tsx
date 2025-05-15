import React from 'react'

const CustomerInfo = () => {
  return (
    <div className='w-full flex flex-col space-y-12 px-14'>

    <div className='w-full flex flex-col space-y-4 '>
     <div className='tex-xl font-semibold'>Customer Information</div>
     {/* Email */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>E-mail</div>
     <input type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

     {/* First Name - Last Name */}
     <div className='flex items-center justify-center gap-x-3'>

       {/* First-Name */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>First-mail</div>
     <input type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

      {/* Last-Name */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Last-mail</div>
     <input type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

     </div>


    </div>
    
    <div className='w-full flex flex-col space-y-4'>
     <div className='tex-xl font-semibold'>Customer Information</div>
     {/* Country */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>Country</div>
     <select className='border border-[#D9D9D9] focus:outline-none text-[#555555] w-full rounded-sm p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>

     {/* State/Region */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>State/Region</div>
     <select className='border border-[#D9D9D9] focus:outline-none text-[#555555] w-full rounded-sm p-1  text-xs'>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Australia</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>Pakistan</option>
        <option className='flex items-center justify-center gap-x-1 placeholder:text-xs'>India</option>
     </select>
     </div>


     {/* Address */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'>State/Region</div>
     <input type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>

     {/* Phone Number */}
     <div className='w-full flex flex-col items-start justify-start gap-y-1'>
     <div className='text-xs text-[#555555]'> Phone Number </div>
     <input type='text'  className='border w-full rounded-sm p-1 text-[#D9D9D9]' />
     </div>


    </div>

    </div>
  )
}

export default CustomerInfo