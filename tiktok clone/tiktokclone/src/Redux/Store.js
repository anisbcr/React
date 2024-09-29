import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../Redux/VideoSlice";
import authReducer from "../Redux/AuthSlice";

const rootReducer = {
  videos: videoReducer,
  auth: authReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
export default store;
