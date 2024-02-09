"use client";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import LeftNav from "./LeftNav";
import Header from "./Header";
import { useParams } from "next/navigation";
import { youtubeContext } from "../context/contextWrapper";
import { commonApi } from "../api/commonApi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";
import { BiLike, BiDislike } from "react-icons/bi";
import SuggestionVidoeCard from "./SuggestionVidoeCard";

const VideoDetailPage = () => { 
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { setLoading,loading } = useContext(youtubeContext);
  const fetchingVideoDetail = () => {
    setLoading(true);
    commonApi(`video/details/?id=${id}`)
      .then((res) => {
        setVideo(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  const fetchRelatedVideo = () => {
    setLoading(true);
    commonApi(`video/related-contents/?id=${id}`).then((res) => {
      setRelatedVideo(res?.data?.contents);
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchingVideoDetail();
    fetchRelatedVideo();
  }, [id]);
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-56px)] w-full bg-black flex flex-row">
        <div className="sm:hidden block">
        <LeftNav/>
        </div>
        <div className="flex w-full md:flex-row flex-col font-roboto p-2 md:p-4 overflow-y-auto">
          <div className=" flex flex-col w-full md:w-[calc(100%-250px)] lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] p-1    ">
            <div className="w-full h-[200px] md:h-[400px] lg:h-[600px] xl:h-[700px]  ">
              <ReactPlayer
                style={{ backgroundColor: "#000000" }}
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${id}`}
                playing
              />
            </div>
            <div className="flex flex-col mt-2 gap-2">
              <div className="flex-col">
              <span className="text-xs text-white/20">  {`${abbreviateNumber(video?.stats?.views,2)} Views`}  </span>
              <p className="line-clamp-1 font-bold text-white ">
                {video?.title}
              </p>
              </div>
              <div className="flex gap-4 flex-row  justify-between">
                <div className="flex flex-row items-center gap-4">
                  <div className="w-8 h-8 md:h-11 md:w-11 rounded-full">
                    <img
                        src={video?.author?.avatar[0]?.url}
                      className="h-full w-full rounded-full object-cover"
                    
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center gap-2">
                      <span className="font-semibold text-xs md:text-base text-white">
                      {video?.author?.title}
                      </span>
                      {video?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/50 text-[12px] ml-1" />
                      )}
                    </div>
                    <span className="text-[10px] leading-1 md:text-sm text-white/20">
                      {video?.author?.stats?.subscribersText}
                     
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 sm:w-auto justify-between flex-col-reverse sm:flex-row sm:justify-normal sm:gap-4">
                  <button className="px-5 p-2 sm:px-4 font-semibold tracking-wide hover:bg-white/80 sm:p-2 rounded-3xl text-xs sm:text-sm text-black hidden sm:block bg-white">
                    Subscribe
                  </button>
                  <div className="flex items-center gap-4 bg-primaryClr px-2 p-1 rounded-3xl w-32">
                    <span className="flex text-xs md:text-sm items-center gap-2">
                      <BiLike className="text-xl" />
                      {`${abbreviateNumber(video?.stats?.likes,1)}`} 
                    </span>
                    <span className="border-l pl-1 border-white/40">
                      <BiDislike className="text-xl" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" overflow-y-auto p-1  w-full md:w-[250px] lg:w-[350px] xl:w-[400px]">
            {
             !loading && relatedVideo?.length>0 && relatedVideo.map((item)=>{
              if(item?.type==='video'){
                return <SuggestionVidoeCard 
                key={item?.video?.videoId}
                video={item?.video}
                />
              }
             })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailPage;
