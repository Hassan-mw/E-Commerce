import React from 'react'

const ProductData = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-white'>
     <div>
     <Sheet>
    <SheetTrigger className="text-blue-600 flex items-center space-x-3"><MdMenu size={20} /> <span className={`  ${jost.className} border-b border-white hover:border-slate-400 font-bold`}>Show Sidebar</span></SheetTrigger>
    <SheetContent className="w-[360px] h-full overflow-y-auto bg-white p-0">
      <SheetHeader className="w-full flex flex-col">
        <SheetTitle className=" w-full p-3">
           <div className="flex items-center justify-center  border-b py-3 ">
           <SheetClose className={` ${jost.className} hover:cursor-pointer  flex items-center justify-center text-sm text-red-600 `}><div><IoMdClose  size={20} /> </div>Close</SheetClose>
           </div>
   
        </SheetTitle>
        <SheetDescription>

        </SheetDescription>
      </SheetHeader>
      <SheetFooter>
        {/* Data */}
        <JobListSidebarData/>
  
          </SheetFooter>
    </SheetContent>
  </Sheet>
     </div>
    </div>
  )
}

export default ProductData