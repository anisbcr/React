import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, url: "video1.mp4", liked: false },
  { id: 2, url: "video2.mp4", liked: false },
];

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    likeVideo: (state, action) => {
      const video = state.find((v) => v.id === action.payload);
      if (video) video.liked = !video.liked;
    },
  },
});
const { actions, reducer } = videoSlice;
export const { likeVideo } = actions;
export default reducer;
