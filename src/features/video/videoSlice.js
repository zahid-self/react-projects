import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./videoAPI"

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchVideoAsync = createAsyncThunk('video/fetchVideoAsync',
    async (id) => {
        const video = await getVideo(id);
        return video
    }
)

const fetchVideo = createSlice({
    name: 'video',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchVideoAsync.pending, (state) => {
                return {
                    isLoading: true,
                    isError: false
                }
            })
            .addCase(fetchVideoAsync.fulfilled, (state, action)=> {
                return{
                    isLoading: false,
                    video: action.payload,
                }
            })
            .addCase(fetchVideoAsync.rejected, (state, action)=> {
                return{
                    isLoading: false,
                    isError: true,
                    video: {},
                    error: action.error?.message
                }
            })

    }
})


export default fetchVideo.reducer