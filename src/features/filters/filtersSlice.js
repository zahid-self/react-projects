import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags: [],
    search: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{
        tagSelected: (state, action) => {
            state.tags.push(action.payload)
        },
        tagRemoved: (state,action) => {
            const selectedTagIndex = state.tags.indexOf(action.payload);
            console.log(selectedTagIndex);
            if(selectedTagIndex !== -1){
                state.tags.splice(selectedTagIndex,1)
            }
        },
        searched:(state, action) => {
            state.search = action.payload
        }
    }
})


export const { tagSelected, tagRemoved, searched } = filterSlice.actions
export default filterSlice.reducer