// creating a Store
import axios from 'axios'

const { default: Axios } = require('axios')
const redux = require('redux')//ES5 method
const createStore = redux.createStore

// using the middleware const
const applyMiddleware = redux.applyMiddleware
// thunk middleware
const thunkMiddleware = redux.thunkMiddleware

 
// state
// object with 3 properties

const initialState = {
    loading : false,
    users : [],
    error : ''
}

// Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE= 'FETCH_USERS_FAILURE'


const fetchUsersRequest = () => {
    return {
        type : FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}

const fetchUsersFailure = error => {
    return {
        type : FETCH_USERS_FAILURE,
        payload : error 
    }
}


// Reducers
const reducer = (state  = initialState , action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state ,
                loading : true 
            }
        
        case FETCH_USERS_SUCCESS:
            return {
                loading : false,
                users : action.payload,
                error : ''
            }
        
        case FETCH_USERS_FAILURE:
            return {
                loading : false,
                users : [],
                error : action.payload
            }

    }
}

// building an action creator

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequests)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data
            // where users is this
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            // error.message
            dispatch(fetchUsersFailure(error.message))
        })
    }
}


// apply the middleware here as a fn call
// and then passs the thunk middleware as a parameter
const store = createStore(reducer , applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())});
store.dispatch(fetchUsers())



// output

// it shows the o/p as the users form the 0 -10 of the users