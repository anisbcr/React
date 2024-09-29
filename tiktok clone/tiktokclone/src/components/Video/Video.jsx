import React from "react";
import { useDispatch } from "react-redux";
import { likeVideo } from "../../Redux/VideoSlice";
import "../Video/Video.css";
const Video = ({ video }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <video src={video.url} controls />
      <button onClick={() => dispatch(likeVideo(video.id))}>
        {video.liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default Video;
