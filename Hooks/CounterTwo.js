import React , {useReducer} from  'react'

const initialState = {
    firstCounter : 0
};

const  reducer = (state , action)  => {

    switch (action.type) {
        case 'increement':
            return { firstcounter : state.firstCounter + 1 };
        case 'decreement':
            return { firstcounter : state.firstCounter - 1 };
        case 'reset':
            return initialState
        default:
            return state
    }    
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
        <div>
            count - {count.firstCounter}
        </div>
            <button onClick= { () => dispatch({type : 'increement'})}  >Increement</button>
            <button onClick= { () => dispatch({type : 'decreement' })}>Decreement</button>
            <button onClick= { () => dispatch({type : 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo


// /By using it with the object