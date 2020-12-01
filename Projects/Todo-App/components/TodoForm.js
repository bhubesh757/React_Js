import React , {useState , useEffect , useRef} from 'react'

function TodoForm(props) {
    const [input, setinput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setinput (e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id : Math.floor(Math.random() * 10000),
            text : input
        });
        setinput ('')
    }
    return (
        <form className  = 'todo-form' onSubmit = {handleSubmit}>
            <input type = 'text' placeholder='Add a Todo ' 
           value = {input} name = 'text' className = 'todo-input' onChange = {handleChange} 
           ref = {inputRef}></input>
           <button className = 'todo-button'> Add Todo</button>
           </form>
            
    )
}

export default TodoForm
