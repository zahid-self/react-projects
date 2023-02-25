import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/counterReducer";

const rootReducer = combineReducers({
    count: counterReducer,
    dynamicCounter: dynamicCounterReducer
})

export default rootReducer