import rootReducer from "../rootReducer";


const myLogger = (store) => (next) => (action) => {
    console.log('Previous state',store.getState());
    console.log('Action',action);
    const upcomingState = [action].reduce(rootReducer, store.getState());
    console.log('Upcoimng state', JSON.stringify(upcomingState));
    return next(action);
}

export default myLogger;