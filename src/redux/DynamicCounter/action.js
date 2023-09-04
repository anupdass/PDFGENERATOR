import { DYNAMICDEINCREMENT, DYNAMICINCREMENT } from "./actionTypes"

export const dIncrement = (value) => {
    return {
        type: DYNAMICINCREMENT,
        payload: value
    }
}

export const ddcrement = (value) => {
    return {
        type: DYNAMICDEINCREMENT,
        payload: value
    }
}