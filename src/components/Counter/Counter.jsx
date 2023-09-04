import React from 'react'
import { connect } from 'react-redux'
import { incremet, decremet } from '../../redux/Counter/action'

const Counter = ({ count, incrementValue, decremetValue }) => {
    return (
        <div style={{ display: 'flex', marginBottom: '100px' }}>
            <button onClick={incrementValue}>Increment</button>
            <h2>{count}</h2>
            <button onClick={decremetValue}>Decrement</button>
        </div>
    )
}


const mapStateProps = (state) => {
    return {
        count: state?.counter.value
    }
}

const mapToDitchPatchProps = (dispatch) => {
    return {
        incrementValue: () => dispatch(incremet()),
        decremetValue: () => dispatch(decremet())
    }
}


export default connect(mapStateProps, mapToDitchPatchProps)(Counter)