import React from 'react'
import { buyCake } from './Redux/index'
import {connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2> No of Cakes - { props.numofCakes}</h2>
            <button onClick = {props.buyCake} >Buy Cakes</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numofCakes : state.numofCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (CakeContainer)


// Actions to the app
// Actions Creators