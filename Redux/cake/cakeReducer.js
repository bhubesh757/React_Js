// Reducers in cakeShop
// lets import the caketypes from the caketypes from the file js

import {BUY_CAKE} from './cakeTypes'

const initialState = {
    numofCakes : 10
}                 /// this is the number of cakes, which is the num of cakes and it may be 
// state . numofcakes , wtf it is state - initialState
const cakeReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numofCakes : state.numofCakes - 1
            }
            default : return state
    }
}

export default cakeReducer


// next create a store