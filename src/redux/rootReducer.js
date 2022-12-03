import { combineReducers } from "redux";
import dynamicCounterReducer from "./dynamicCounter/counterReducer";
import counterReducer from "./counter/counterReducer";


const rootReducer = combineReducers({
    counter : counterReducer,
    dynamicCounter : dynamicCounterReducer
});

export default rootReducer;