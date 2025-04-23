
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
          {/* //!   1 */}
             
            <div className="flex flex-col space-y-2 items-start justify-start">

          <span className={`${jost.className} text-2xl hover:cursor-pointer flex items-center justify-center border-b-2 `}>Pages</span>   
          <div className="w-full grid grid-cols-2 gap-3">

          <span className={`${jost.className} text-md hover:cursor-pointer text-[#666678] hover:text-blue-400 duration-500 `}>Blog</span>   
          <span className={`${jost.className} text-md hover:cursor-pointer text-[#666678] hover:text-blue-400 duration-500 `}>About us</span>
          <span className={`${jost.className} text-md hover:cursor-pointer text-[#666678] hover:text-blue-400 duration-500 `}>Contact us</span>
          <span className={`${jost.className} text-md hover:cursor-pointer text-[#666678] hover:text-blue-400 duration-500 `}>Help & Support</span>
          </div>
          </div>
          {/* //!   2 */}
          
            <div className="flex flex-col space-y-3 items-start justify-start ">

          <span className={`${jost.className} text-2xl hover:cursor-pointer flex items-center justify-center border-b-2 text-black`}>Category</span>   
          
           <div className='w-full flex items-start justify-between gap-x-12 xl:gap-x-12 text-[#666678] '>
              <div className={`${jost.className} flex items-center justify-center gap-x-2 hover:cursor-pointer hover:text-blue-400 duration-500`}><MdPerson size={20} /><span>Sign in</span></div>
              <div className={`${jost.className} flex items-center justify-center gap-x-2 hover:cursor-pointer hover:text-blue-400 duration-500`}><GoHeart  size={20}  /><span>Favourite</span> </div>
              <div className={`${jost.className} flex items-center justify-center gap-x-2 hover:cursor-pointer hover:text-blue-400 duration-500`}><FaCartArrowDown  size={20}   /><span>Cart</span></div>
          </div>
          </div>
          {/* //!   3 */}
            <div className="flex flex-col space-y-3 items-start justify-start">

          <span className={`${jost.className} text-2xl hover:cursor-pointer flex items-center justify-center border-b-2`}>Platform</span>   
          
          <div style={{fontWeight:300}} className={`${jost.className} w-full flex items-center justify-between  text-[#666678] `}>
          <span className='hover:cursor-pointer hover:text-blue-400 duration-500 flex items-center justify-center gap-x-2'> <FaFacebookF /><span>Facebook</span></span>
          <span className='hover:cursor-pointer  hover:text-blue-400 duration-500 flex items-center justify-center gap-x-2'>  <RiInstagramFill /><span>Instagram</span></span>
          <span className='hover:cursor-pointer  hover:text-blue-400 duration-500 flex items-center justify-center gap-x-2'>   <FaTwitter /><span>Twitter</span></span>
              </div>
          </div>
  
            <div className="w-full flex items-center justify-center pt-16">
  <div style={{fontWeight:300}} className={`${jost.className} hover:cursor-pointer w-5/6 flex items-center justify-center hover:bg-blue-700 duration-500 bg-blue-500 text-white text-xl p-2 rounded-md`}>DOWNLOAD APP</div>
            </div>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
   

    </>
  )
}

export default Sidebar