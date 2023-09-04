import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dIncrement, ddcrement } from '../../redux/DynamicCounter/action'

const DynamicCounter = () => {
    const newCount = useSelector((state) => state.dynamicCounter.value)
    const dispatch = useDispatch()

    const incrementHandler = (value) => {
        dispatch(dIncrement(value))
    }

    const decrementHandler = (value) => {
        dispatch(ddcrement(value))
    }

    console.log(newCount)
    return (
        <div style={{ display: 'flex', marginBottom: '100px' }}>
            <button onClick={() => incrementHandler(5)}>Increment</button>
            <h2>{newCount}</h2>
            <button onClick={() => decrementHandler(3)}>Decrement</button>
        </div>
    )
}

export default DynamicCounter