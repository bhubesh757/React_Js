import React , { useState}from 'react'
import { buyCake } from './Redux/index'
import {connect } from 'react-redux'

function NewCakeContainer(props) {

    const [number, setnumber] = useState(1)
    return (
        <div>
            <h2> No of Cakes - { props.numofCakes}</h2>
            <input type = 'text' value = { number} onChange = {e => setnumber(e.target.value)} ></input>
            <button onClick = {() => props.buyCake(number)} >Buy {number} Cakes</button>
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
        buyCake : number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps , mapDispatchToProps) (NewCakeContainer)


// Actions to the app
// Actions Creators

// change the actions and pass the number in the action variable as a parameter


// (number = 1)

// and add payload to the actions

// payload = number 
// and pass the action.payload  in the  cakeReducer.js 