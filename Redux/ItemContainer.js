import React from 'react'
import {connect } from 'react-redux'

function ItemContainer() {
    return (
        <div>
            <h2> Item -  </h2>
        </div>
    )
}

const mapStateToProps = (state , ownProps) => {
    const itemState = ownProps.cake ? state.cake.numofCakes : state.numofIceCreams

    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch (buyIceCream ())
}

export default connect (mapStateToProps , mapDispatchToProps) (ItemContainer)
