import React ,{useState} from 'react'
import Usecounter from './Usecounter'

function CounterOne() {
    // const [count, setcount] = useState(0)
    // const increement = () => {
    //     setcount(prevCount => prevCount + 1)
    // }
    
    // const decreement = () => {
    //     setcount(prevCount => prevCount - 1)
    // }
    
    // const reset = () => {
    //     setcount(0)
    // }

    const [ count , increement , decreement , reset ] = Usecounter(10)
    return (
        <div>
            <h2> Count = {count} </h2>
            <button onClick = {increement}>increement</button>
            <button onClick = {decreement}>decreement</button>
            <button onClick = {reset}>reset</button>
        </div>
    )
}

export default CounterOne
