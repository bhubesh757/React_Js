import React , {useState} from 'react';

function Hookcounter() {

    const [count, setcount] = useState(0)  // Aray Destructuring
    return (
        <div>
            <button onClick = {() => setcount(count + 1)}> count {count} </button>
        </div>
    )
}

export default Hookcounter


// useState Hook


