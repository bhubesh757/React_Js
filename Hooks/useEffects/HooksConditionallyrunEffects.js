import React ,{useState , useEffect} from 'react'

function HookUseEffectcounter() {

    const [count, setcount] = useState(0)
    const [name, setname] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating the document title');
        document.title = `You clicked ${count} times`
    },[count])

    return (
        <div>
            <input type = 'text' value = {name } onChange ={e => setname(e.target.value)} ></input>
            <button onClick = {() => setcount (count + 1)}> Click { count} </button>
        </div>
    )
}

export default HookUseEffectcounter
