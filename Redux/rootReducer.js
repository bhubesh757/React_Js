import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducers'


const roorReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

export default rootReducer