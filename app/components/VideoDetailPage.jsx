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
import { AiOutlineLike } from "react-icons/ai";
const VideoDetailPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { setLoading } = useContext(youtubeContext);
  const fetchingVideoDetail = () => {
    setLoading(true);
    commonApi(`video/details/?id=${id}`).then((res) => {
      console.log("from videodetails", res);
      setVideo(res?.data);
    }).catch((err)=>{
        console.log(err)
    })
    setLoading(false);
  };
  const fetchRelatedVideo = () => {
    setLoading(true);
    commonApi(`video/related-contents/?id=${id}`).then((res) => {
      console.log("from relatedVideo", res?.data?.contents);
      setRelatedVideo(res?.data?.contents);
    });
    setLoading(false);
  };
  useEffect(() => {
    fetchingVideoDetail();
    // fetchRelatedVideo();
  }, [id]);
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-56px)] w-full bg-black flex flex-row">
        <LeftNav/>
        <div className=" flex-1 w-full justify-center flex-row overflow-y-auto">
          <div className=" flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-[100%-350px] xl:w-[100%-400px] px-4 py-3 lg:py-6">
              <div className="h-[200px] md:h-[400px] xl:h-[500px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls
                  style={{ backgroundColor: "#000000" }}
                />
              </div>
              <div className="text-white font-bold text-sm md:text-lg mt-4 line-clamp-2">
                {video?.title}
              </div>
              <div className="flex justify-between flex-col md:flex-row mt-4">
                <div className="flex">
                  <div className="flex items-start">
                    <div className="flex h-11 w-11 rounded-full">
                      <img
                        className="h-full w-full object-cover"
                        src={video?.author?.avatar[0]?.url}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ml-3">
                    <div className="text-white text-sm font-semibold flex items-center">
                      {video?.author?.title}
                      {video?.author?.badges[0]?.type ===
                        "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/50 text-[12px] ml-1" />
                      )}
                    </div>
                    <div className="text-white/75 text-sm">
                      {video?.author?.stats?.subscribersText}
                    </div>
                  </div>
                </div>
                <div className="flex text-white mt-4 md:mt-0">
                    <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/10">
                        <AiOutlineLike className='text-xl text-white mr-2'/> 
<span> {`${abbreviateNumber(video?.stats?.likes,2)} Likes`} </span>
                    </div>
                            <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/10 ml-4">
                        <AiOutlineLike className='text-xl text-white mr-2'/> 
<span> {`${abbreviateNumber(video?.stats?.views,2)} Views`} </span>

                            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetailPage;
