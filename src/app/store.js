import { configureStore } from '@reduxjs/toolkit';
import tagReducer from '../features/tags/tagSlice';
import videosReducer from "../features/videos/videosSlice"
import videoReducer from "../features/video/videoSlice"
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filters: filtersReducer
  },
});
