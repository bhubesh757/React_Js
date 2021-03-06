// import redux from 'redux'

const redux = require ('redux')
const createStore = redux.createStore

// Implementing the  Actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
// define the action
// it has type


function buyCake(){
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

function buyIceCream(){
    return {
        type : BUY_CAKE,
        info : 'second redux action'
    }
}

// Reducers
// (prevState , action) => newState


// after the store , using the multiple no of reducers
const initialState = {
    numofCakes : 10,
    numofIceCreams : 20 // this is the second case using the multipe reducers implementing from the initialState
}

// After this what we are doing is we are splitting the initialState into separate and we can use the reducer separately

const initialCakeState = {
    numofCakes : 10
}


const initialIceCreamState = {
    numofIceCreams : 20
}

const reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKE :
            return {
                ...state,
                numofCakes : state.numofCakes - 1
            }

        case BUY_ICECREAM :
            return {
                ...state,
                numofIceCreams : state.numofIceCreams - 1
            }

            default : 
                return state
     }
}





// Store
// holds applicaiton state
//  allows access
// state to be  updated
// getState() , dispatch , subscribe()

// Responsibilities of Store
const store = createStore(reducer)
console.log('Initial State' , store.getState()); 
 const unsubscribe = store.subscribe(() => console.log('Updated State' , store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()


// create Reducers just creates only one stores and reducers

