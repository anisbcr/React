import React from "react";
import { useSelector } from "react-redux";
import Video from "../Video/Video";
import "../VideoFeed/VideoFeed.css";
const VideoFeed = () => {
  const videos = useSelector((state) => state.videos);

  return (
    <div>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
};

export default VideoFeed;
