import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { youtubeContext } from "../context/contextWrapper";
import { commonApi } from "../api/commonApi";

const useVideoDetailPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { setLoading } = useContext(youtubeContext);
  const fetchingVideoDetail = () => {
    setLoading(true);
    commonApi(`video/details/?id=${id}`).then((res) => {
      setVideo(res?.data);
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
  return {
    id,
    video,
    relatedVideo,
  };
};

export default useVideoDetailPage;
