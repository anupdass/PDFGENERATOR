import { applyMiddleware, createStore } from "redux";
// import counterReducer from "./Counter/counterResucer";
// import dynamicReducer from "./DynamicCounter/dynamicReducer";

import logger from "redux-logger";

import rootReducer from "./rootReducer";

import { composeWithDevTools } from 'redux-devtools-extension';


const myLogger = (store) => (next) => (action) => {
    console.log(`Action:${JSON.stringify(action)}`)
    console.log(`Before:${JSON.stringify(store.getState())}`)

    const upcoming = [action].reduce(rootReducer, store.getState())

    console.log(JSON.stringify(upcoming))
    console.log('re')
    return next(action)

}


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)))