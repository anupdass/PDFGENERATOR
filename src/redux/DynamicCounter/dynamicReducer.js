import { DYNAMICDEINCREMENT, DYNAMICINCREMENT } from "./actionTypes"

const dynamicValue = {
    value: 0
}

const dynamicReducer = (state = dynamicValue, action) => {
    switch (action.type) {
        case DYNAMICINCREMENT: {
            return {
                ...state,
                value: state.value + action.payload
            }
        }
        case DYNAMICDEINCREMENT: {
            return {
                ...state,
                value: state.value - action.payload
            }
        }
        default:
            return state
    }
}

export default dynamicReducer;