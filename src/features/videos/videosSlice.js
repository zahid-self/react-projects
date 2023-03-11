import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI"

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchVideosAsync = createAsyncThunk('videos/fetchVideosAsync',
    async ({tags, search}) => {
        const videos = await getVideos({tags, search});
        return videos
    }
)

const fetchVideos = createSlice({
    name: 'videos',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchVideosAsync.pending, (state) => {
                return {
                    isLoading: true,
                    isError: false
                }
            })
            .addCase(fetchVideosAsync.fulfilled, (state, action)=> {
                return{
                    isLoading: false,
                    videos: action.payload,
                }
            })
            .addCase(fetchVideosAsync.rejected, (state, action)=> {
                return{
                    isLoading: false,
                    isError: true,
                    videos: [],
                    error: action.error?.message
                }
            })
    }
})


export default fetchVideos.reducer