import { Jost } from 'next/font/google'


import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})

const TopRight = () => {
  return (
    <div className='w-full flex items-center justify-center gap-x-12'>
     <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center gap-x-8 text-md text-[#555555]`}>
    <div>About us</div>
    <div>Blog</div>
    <div>Contack us</div>
    <div>Help & support</div>
     </div>
     <div style={{fontWeight:300}} className={`${jost.className} flex items-center justify-center gap-x-4  text-[#C4C4C4]`}>
     <FaFacebookF />
     <RiInstagramFill />
     <FaTwitter />
     </div>
</div>
  )
}

export default TopRight