// same as cake follws

import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numofIceCreams = 15
}

const iceCreamReducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state ,
            numofIceCreams = state.numofIceCreams - 1
        }

        default : return state
    }
}


export default iceCreamReducer