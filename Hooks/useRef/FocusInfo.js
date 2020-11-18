import React ,{useEffect , useRef}  from 'react'

function FocusInfo() {
    
    const inputRef = useRef(null)

    useEffect(() => {
        // Focus the input  element
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input ref = {inputRef} type = 'text'></input>
        </div>
    )
}

export default FocusInfo



// To make the text and make them in the focus when the page reloads
