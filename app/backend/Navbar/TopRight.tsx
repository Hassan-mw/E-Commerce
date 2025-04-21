import { Jost } from 'next/font/google'


import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TopRight = () => {
  return (
    <div className='w-full flex items-center justify-end md:justify-between gap-x-16 md:pb-3'>
     <div style={{fontWeight:300}} className={`${jost.className}  xl:w-[80%]  flex items-center justify-between gap-x-8 text-md text-[#555555]`}>
    <div className='hover:cursor-pointer'>About us</div>
    <div className='hover:cursor-pointer'>Blog</div>
    <div className='hover:cursor-pointer'>Contack us</div>
    <div className='hover:cursor-pointer'>Help & support</div>
     </div>
     <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center gap-x-4  text-[#C4C4C4]`}>
 <span className='hover:cursor-pointer'> <FaFacebookF /></span>
 <span className='hover:cursor-pointer'>  <RiInstagramFill /></span>
 <span className='hover:cursor-pointer'>   <FaTwitter /></span>
     </div>
</div>
  )
}

export default TopRight