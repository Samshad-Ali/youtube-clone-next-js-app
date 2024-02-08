import React from 'react'
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import VidoeLength from "../shared/VidoeLength";
import { abbreviateNumber } from "js-abbreviation-number";
function SuggestionVidoeCard({video}) {
  return (
    <div className='w-full'>
       <Link href={`/video/${video?.videoId}`}
       
       >
      <div className="flex flex-col md:flex-row mb-4 ">
        <div className="relative h-48 w-full md:w-2/3 md:h-24 md:rounded-md overflow-hidden">
          <img
          className='w-full h-full object-cover'
          src={video?.thumbnails[1]?.url}
          />
          {video?.lengthSeconds && <VidoeLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex w-full md:w-1/3 md:items-center mt-3 text-white">
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-1">
                {video?.title}
            </span>
            <span className="flex items-center gap-2 text-xs">
                {video?.author?.title}
                {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && ( <BsFillCheckCircleFill className="text-white/50 text-[12px] ml-1" /> )}
            </span>
            <div className="flex text-xs font-semibold text-white/75 truncate overflow-hidden">
        <span>{
            `${abbreviateNumber(video?.stats?.views),2} views`
            }</span>
            <span className="flex leading-none text-xs font-semibold text-white/75 mx-1">•</span>
            <span className="truncate">
                {video?.publishedTimeText}
            </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default SuggestionVidoeCard