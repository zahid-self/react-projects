import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./relatedVideosAPI"

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchRelatedVideosAsync = createAsyncThunk('relatedVideos/fetchRelatedVideosAsync',
    async ({tags, id}) => {
        const relatedVideos = await getRelatedVideos({tags, id});

        return relatedVideos
    }
)

const fetchRelatedVideos = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchRelatedVideosAsync.pending, (state) => {
                return {
                    isLoading: true,
                    isError: false
                }
            })
            .addCase(fetchRelatedVideosAsync.fulfilled, (state, action)=> {
                return{
                    isLoading: false,
                    relatedVideos: action.payload,
                }
            })
            .addCase(fetchRelatedVideosAsync.rejected, (state, action)=> {
                return{
                    isLoading: false,
                    isError: true,
                    relatedVideos: [],
                    error: action.error?.message
                }
            })
    }
})


export default fetchRelatedVideos.reducer