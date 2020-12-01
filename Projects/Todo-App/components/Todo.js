import React ,{useState} from 'react'
import TodoForm from "./TodoForm";
import TodoList from './TodoList';
import {FaWindowClose} from 'react-icons/fa'
import {TiEdit} from 'react-icons/ti'


const  Todo = ({todos , completeTodo , removeTodo , updateTodo}) => {

    const [edit, setedit] = useState({
        id : null ,
        value : ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id , value )
        setedit({
            id : null,
            value : ''

        })
    }

    if (edit.id) {
        return <TodoForm edit = {edit} onSubmit ={submitUpdate} ></TodoForm>
    }


    return todos.map((todo , index) => (
        <div className = {todo.isComplete ? 'todo-row complete' : 'todo-row'}key= {index} >
    <div key = {todo.id} onClick = {() => completeTodo(todo.id)}>
    {todo.text}
    </div>
    <div className = 'icons'>
    <FaWindowClose onClick = { () => removeTodo(todo.id)} className = 'delete-icon' ></FaWindowClose>
    <TiEdit onClick = { () => setedit({id : todo.id , value : todo.text}) } className = 'edit-icon' ></TiEdit>
    </div>
        </div>
    ))
    }
export default Todo
