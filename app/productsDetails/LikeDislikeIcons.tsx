'use client'

import { Jost } from "next/font/google";
import { AiFillDislike, AiFillLike } from "react-icons/ai";



const jost=Jost({
  weight:['500'],
  subsets:['latin']
})


const LikeDislikeIcons = ({like,disLike}:{like:String | undefined,disLike:String | undefined}) => {


  return (
    <div className="flex items-center justify-center gap-x-3 px-2 py-1  border-2 border-slate-300 rounded-md">
    <div  className="flex items-center justify-center gap-x-1 border-r pr-1 border-[#C4C4C4]"><span className="text-[#C4C4C4] hover:text-green-500 duration-200 hover:cursor-pointer"><AiFillLike size={20} /></span ><span className={`${jost.className}`}>{like}</span></div>
    <div className="flex items-center justify-center gap-x-1"><span className="text-[#C4C4C4]  hover:text-red-500 duration-200 hover:cursor-pointer"><AiFillDislike  size={20} /></span><span className={`${jost.className}`}>{disLike}</span></div>
    </div>
  )
}

export default LikeDislikeIcons