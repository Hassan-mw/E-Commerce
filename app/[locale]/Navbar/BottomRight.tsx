import { Jost } from 'next/font/google'


import { RiInstagramFill } from "react-icons/ri";

const jost=Jost({
  weight:['500'],
  subsets:['latin']
})
import { FaCartArrowDown, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { MdPerson } from "react-icons/md";
import Link from 'next/link';

const BottomRight = () => {
  return (
    <div className='w-full flex items-center justify-end gap-x-6 xl:gap-x-12 text-white'>
    <div className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><MdPerson /><span>Sign in</span></div>
    <div className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><GoHeart /> <span>Favourites</span></div>
    <Link href='/cart' className='flex items-center justify-center gap-x-2 hover:cursor-pointer'><FaCartArrowDown  /><span>Card</span></Link>
</div>
  )
}

export default BottomRight