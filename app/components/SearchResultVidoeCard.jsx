import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import VidoeLength from "../shared/VidoeLength";
import { abbreviateNumber } from "js-abbreviation-number";
const SearchResultVidoeCard = ({ video }) => {
  return (
    <Link href={`/video/${video?.videoId}`}>
      <div className=" flex flex-col sm:flex-row gap-2 bg-primaryClr rounded-none sm:rounded-md">
        <div className="relative">
          <img
            className="w-full sm:w-[300px] h-[200px] sm:rounded-md object-cover"
            src={video?.thumbnails[0]?.url}
            />
            <span>

            {video?.lengthSeconds && <VidoeLength time={video?.lengthSeconds} />}
            </span>
        </div>
        <div className="flex flex-1 flex-col sm:self-center p-2 gap-1">
          <p className="line-clamp-2 text-base sm:text-lg font-bold text-white sm:line-clamp-2">
            {" "}
            {video?.title}{" "}
          </p>
          <div className="flex flex-row gap-1 items-center text-sm text-white/40">
            <span>{`${abbreviateNumber(video?.stats?.views, 2)} views`}</span>
            <span>•</span>
            <span> {video?.publishedTimeText} </span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img className="h-8 w-8 sm:h-11 sm:w-11 rounded-full" src={video?.author?.avatar[0]?.url} />
            <span className="text-white/40 font-semibold text-sm"> {video?.author?.title} </span>
            <span> 
            {video?.author?.badges[0]?.type==="VERIFIED_CHANNEL" && <BsFillCheckCircleFill className="text-white/50 " />  }
               </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVidoeCard;
