import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Link from "next/link";
import VidoeLength from "../shared/VidoeLength";
import { abbreviateNumber } from "js-abbreviation-number";
const VideoCard = ({ video }) => {
  return (
    <Link href={`/video/${video?.videoId}`}>
      <div className="flex rounded-md bg-primaryClr flex-col mb-4 ">
        <div className="relative  h-full md:h-40 md:rounded-md overflow-hidden">
          <img src={video?.thumbnails[1]?.url} />
          {video?.lengthSeconds && <VidoeLength time={video?.lengthSeconds} />}
        </div>
        <div className="flex mt-1 p-2 text-white">
          <div className="flex items-start">
            <div className="w-9 h-9 rounded-full  flex overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={video?.author?.avatar[0]?.url}
              />
            </div>
          </div>
          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-sm font-bold line-clamp-1">
              {video?.title}
            </span>
            <span className="flex items-center gap-2 text-xs">
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/50 text-[12px] ml-1" />
              )}
            </span>
            <div className="flex text-xs font-semibold text-white/75 truncate overflow-hidden">
              <span>{`${
                (abbreviateNumber(video?.stats?.views), 2)
              } views`}</span>
              <span className="flex leading-none text-xs font-semibold text-white/75 mx-1">
                •
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
