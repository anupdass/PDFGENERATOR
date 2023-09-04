import { combineReducers } from "redux";
import counterReducer from "./Counter/counterResucer";
import dynamicReducer from "./DynamicCounter/dynamicReducer";





const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: dynamicReducer
})

export default rootReducer