import { Jost } from 'next/font/google'


import { RiInstagramFill } from "react-icons/ri";
import { FaCartArrowDown, FaFacebookF, FaTwitter } from "react-icons/fa6";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
import { GoHeart } from "react-icons/go";
import { MdPerson } from "react-icons/md";

const BottomRight = () => {
  return (
    <div className='w-full flex items-center justify-end gap-x-12 text-white'>
    <div className='flex items-center justify-center gap-x-2'><MdPerson /><span>Sign in</span></div>
    <div className='flex items-center justify-center gap-x-2'><GoHeart /> <span>Favourites</span></div>
    <div className='flex items-center justify-center gap-x-2'><FaCartArrowDown  /><span>Card</span></div>
</div>
  )
}

export default BottomRight