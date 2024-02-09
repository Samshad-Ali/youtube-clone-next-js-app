"use client";
import React, { useContext, useEffect } from "react";
import Header from "./Header";
import LeftNav from "./LeftNav";
import { youtubeContext } from "../context/contextWrapper";
import VideoCard from "./VideoCard";
import { commonApi } from "../api/commonApi";
import MiniNav from "./MiniNav";

const HomePage = () => {
  const {
    searchResults,
    setSearchResults,
    setLoading,
    loading,
    selectCategory,
  } = useContext(youtubeContext);
  const fetchSelectedCategoryData = async (query) => {
    setLoading(true);
    commonApi(`search/?q=${query}`).then((res) => {
      setSearchResults(res?.data?.contents);
    }).catch((err=>{console.log('from homepage',err)}))
    setLoading(false);
  };
  useEffect(() => {
    fetchSelectedCategoryData(selectCategory);
  }, [selectCategory]);
  return (
    <>
      <Header />
      <div className="h-[calc(100vh-56px)] w-full bg-black flex flex-row">
        <LeftNav />
        <div className="flex-1 h-full overflow-y-auto bg-black">
          <MiniNav />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4  p-2">
            {!loading &&
              searchResults?.length > 0 &&
              searchResults?.map((item) => {
                if (item?.type !== "video") return false;
                return (
                  <VideoCard key={item?.video?.videoId} video={item?.video} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
