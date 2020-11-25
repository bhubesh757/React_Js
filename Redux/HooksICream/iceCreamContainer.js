import React from 'react'
import { buyIceCream } from './Redux/index'
import {connect } from 'react-redux'
// import iceCreamReducer from '../iceCream/iceCreamReducers'

function CakeContainer(props) {
    return (
        <div>
            <h2> No of iceCereams - { props.numoficeCreams}</h2>
            <button onClick = {props.buyCake} >Buy IceCreams</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numoficeCreams : state.numoficeCereams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (iceCreamContainer)


// Actions to the app
// Actions Creators