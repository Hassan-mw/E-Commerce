'use client';
import { Jost } from 'next/font/google'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TopRight = () => {
  const pathName=usePathname()

  return (
    <div className='w-full flex items-center justify-end md:justify-between gap-x-16 md:pb-3'>

   {/* page_limks */}
   <div style={{fontWeight:300}} className={`${jost.className}  xl:w-[80%]  flex items-center justify-between gap-x-8 text-md text-[#555555]`}>
   <Link href='/aboutus'   className={` hover:cursor-pointer ${pathName==='/aboutus' && 'text-blue-600'}  hover:text-blue-400 duration-500 `}>About us</Link>
   <Link href='/blog'   className={` hover:cursor-pointer ${pathName==='/blog' && 'text-blue-600'}  hover:text-blue-400 duration-500 `}>Blog</Link>
   <Link href="/contactus" className='hover:cursor-pointer'>Contact us</Link>
   <Link href="/helpsupport" className='hover:cursor-pointer'>Help & support</Link>
   </div>

   {/* Facebook_Instgram_Twitter */}
   <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center gap-x-4  text-[#b1afaf]`}>
   <Link href="https://www.facebook.com/" className='hover:cursor-pointer hover:text-blue-400 duration-500'> <FaFacebookF /></Link>
   <Link href="https://www.instagram.com/" className='hover:cursor-pointer hover:text-blue-400 duration-500'> <RiInstagramFill /></Link>
   <Link href="https://x.com/" className='hover:cursor-pointer  hover:text-blue-400 duration-500'>   <FaTwitter /></Link>
   </div>

   </div>
  )
}

export default TopRight