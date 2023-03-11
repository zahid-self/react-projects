import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagAPI";

const initialState = {
    tags: [],
    isLoading: false,
    isError: false,
    error: ''
}

export const fetchTagsAsync = createAsyncThunk('tags/fetchTagsAsync',
    async () => {
        const tags = await getTags();
        return tags
    }
)

const fetchTags = createSlice({
    name: 'tags',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchTagsAsync.pending, () => {
                return {
                    isLoading: true,
                    isError: false
                }
            })
            .addCase(fetchTagsAsync.fulfilled, (state,action)=> {
                return{
                    isLoading: false,
                    tags: action.payload,
                }
            })
            .addCase(fetchTagsAsync.rejected, (state,action)=> {
                return{
                    isLoading: false,
                    isError: true,
                    tags: [],
                    error: action.error?.message
                }
            })
    }
})


export default fetchTags.reducer