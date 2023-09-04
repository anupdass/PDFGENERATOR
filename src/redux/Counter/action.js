import { DECREMENT, INCREMENT } from "./actionTypes"

export const incremet = () => {
    return {
        type: INCREMENT,
        payload: 1
    }
}
export const decremet = () => {
    return {
        type: DECREMENT,
        payload: 1
    }
}