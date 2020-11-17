import React , { useState , useEffect}from 'react'

function IntervalHookcounter() {
    const [count, setcount] = useState(0)

    const tick = () => {
        // setcount(count + 1)
        setcount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick , 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return (
        <div>
            <h1> {count} </h1>
        </div>
    )
}

export default IntervalHookcounter


// Empty dependency array ,means [] in useEffect


// In this example, useEffect is passed an empty array, []. Hence, the effect function will be called only on mount.
