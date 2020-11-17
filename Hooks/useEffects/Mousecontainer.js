import React , {useState} from 'react'

function Mousecontainer() {
    const [display, setdisplay] = useState(true)
    return (
        <div>
            <button onClick = { () => setdisplay(!display)}>toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default Mousecontainer
