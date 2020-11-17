import React , {useState} from 'react'

function HookcounterTwo() {
    const initialCount = 0
    const [count, setcount] = useState(initialCount)

   const IncTen = () => {
       for (let i = 0; i < 10; i++) {
           setcount(prevCount => prevCount + 1)  //using this by prevcount
           
       }
   }

    return (
        <div>
            Count : {count}
            <button onClick = {() => setcount(initialCount)}>Reset</button>
            <button onClick = { () => setcount(count + 1)} >Increement</button>
            <button onClick = { () => setcount(count-1)}>Decreement</button>
            {/* <button onClick = {() => setcount(count + 5)}> Inc by 5</button> */}
            <button onClick = {IncTen}> inc by 10</button>
        </div>
    )
}

export default HookcounterTwo


// useState with prevCount