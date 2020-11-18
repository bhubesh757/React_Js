import React, {useState , useRef , useEffect} from 'react'

function HookTimer() {

    const [timer, settimer] = useState(0)
    const intervalRef = useRef(0)

    useEffect(() => {
         intervalRef.current = setInterval(() => {
            settimer(prevtimer => prevtimer + 1)
        } , 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
        
    }, [timer])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick = { () => clearInterval(intervalRef.current)}>Clear hook timer</button>
        </div>
    )
}

export default HookTimer
