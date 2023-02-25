import { applyMiddleware, createStore } from "redux"
import { DECREMENT } from "./counter/actionTypes";
import { D_DECREMENT } from "./dynamicCounter/actionTypes";
import rootReducer from "./rootReducer";

const myLogger = (store) => (next) => (action) => {
    console.log('Before ' + JSON.stringify(store.getState()))

    console.log('Action ' + JSON.stringify(action))

    const state = store.getState();
    if(action.type === D_DECREMENT && state.dynamicCounter.value <= 0){
        return false
    }

    if(action.type === DECREMENT && state.count.value <= 0){
        console.log('object');
        return false
    }

    return next(action)
}

const store = createStore(rootReducer,applyMiddleware(myLogger));

console.log(store.getState());

export default store;