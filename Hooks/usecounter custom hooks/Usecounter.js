import  {useState} from 'react'

function Usecounter(initialCount = 0 ) {
    const [count, setcount] = useState(initialCount)
    const increement = () => {
        setcount(prevCount => prevCount + 1)
    }
    
    const decreement = () => {
        setcount(prevCount => prevCount - 1)
    }
    
    const reset = () => {
        setcount(initialCount)
    }
    return [ count , increement, decreement , reset]
}

export default Usecounter
