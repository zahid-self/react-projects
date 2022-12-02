import { INCREMENT, DECREMENT } from "./actionTypes"

const initialState = {
    value : 10
}


const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value : state.value + action.payload
            }
        case DECREMENT:
            return {
                ...state,
                value : state.value - action.payload
            }
        default:
            return state
    }
}

export default counterReducer;