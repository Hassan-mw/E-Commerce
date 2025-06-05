
import { MdMenu } from "react-icons/md"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { RiInstagramFill } from "react-icons/ri";
  import { FaFacebookF, FaTwitter } from "react-icons/fa6";

  import { FaCartArrowDown } from "react-icons/fa6";
  import { GoHeart } from "react-icons/go";
  import { MdPerson } from "react-icons/md";

  const jost=Jost({
    weight:['500'],
    subsets:['latin']
  })
  

import Image from "next/image"
import { Jost } from "next/font/google"
import Link from "next/link";
import { TfiPackage } from "react-icons/tfi";
const Sidebar = () => {

  return (
   <>

    <Sheet >
      <SheetTrigger className='hover:cursor-pointer'>    <MdMenu size={25} />
      </SheetTrigger>
      <SheetContent className='bg-white'>
        <SheetHeader>
          <SheetTitle>   
          </SheetTitle>
          <SheetDescription> </SheetDescription>

          <SheetFooter className='w-full flex flex-col space-y-16 pt-8 px-2'>
          <div className='flex items-center justify-center gap-x-3'><Image height={50} width={50} src="/Navbar_logo.png" alt="logo" /><span className={`${jost.className} text-2xl`}>Limunea</span></div>
          
          {/*  Pages  */}
          <div className="flex flex-col space-y-2 items-start justify-start">
          <h2 className={`${jost.className} w-full text-xl hover:cursor-pointer pb-3 border-slate-200 text-gray-700 flex items-center justify-center border-b-2 `}>Pages</h2>   
          <div className="w-full grid grid-cols-4 gap-3">
          <Link href="/blog" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Blog</Link>   
          <Link href="/aboutus" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>About us</Link>
          <Link href="/contactus" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Contact us</Link>
          <Link href="/helpsupport" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Support</Link>
          </div>
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-3 items-start justify-start ">
          <h2 className={`${jost.className} w-full text-xl hover:cursor-pointer pb-3 border-slate-200 text-gray-700 flex items-center justify-center border-b-2 `}>Category</h2>   
          <div className="w-full grid grid-cols-4 gap-3">
          <Link  href="/authentication"  className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Sign In</Link>   
          <Link href="/favourite" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Favourite</Link>
          <Link  href='/cart' className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Cart </Link>
          <Link href='/order'  className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Order</Link>
          </div>
          </div>


          {/* Platform */}
          <div className="flex flex-col space-y-3 items-start justify-start">
          <h2 className={`${jost.className} w-full text-xl hover:cursor-pointer pb-3 border-slate-200 text-gray-700 flex items-center justify-center border-b-2 `}>Platform</h2>      
          <div className="w-full grid grid-cols-3 gap-3">
          <Link href="https://www.facebook.com/" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Facebook</Link>   
          <Link href="https://www.instagram.com/" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Instagram</Link>
          <Link href="https://x.com/" className={`${jost.className} flex-center text-sm hover:cursor-pointer text-gray-700 hover:text-blue-400 duration-500 `}>Twitter </Link>
          </div>
          </div>
           
           {/* Download */}
          <div className="w-full flex items-center justify-center pt-10">
          <button style={{fontWeight:300}} className={`${jost.className} hover:cursor-pointer w-5/6  flex items-center justify-center hover:bg-blue-700 duration-500 bg-blue-500 text-white text-md p-2 rounded-md`}>DOWNLOAD APP</button>
          </div>


          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
   

    </>
  )
}

export default Sidebar