import React ,{useState} from 'react'
import TodoForm from "./TodoForm";
import Todo from './Todo'

function TodoList() {

    const [todos, settodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo , ...todos];

        settodos(newTodos);
        // console.log(todo , ...todos);
    };

    const updateTodo = (todoid , newValue ) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        settodos(prev => prev.map(item => (item.id === todoid ? newValue : item)))
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !==id)

        settodos(removeArr)
    }


    const completeTodo = id => {
        let updatedTodos = todos.map (todo => {
            if (todo.id === id ) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        settodos(updatedTodos);
    }
    return (
        <div>
            <h1 >Whats the plan For Today?</h1>
            <TodoForm onSubmit = {addTodo} ></TodoForm>
            <Todo todos = {todos} 
            completeTodo = {completeTodo}
            removeTodo = {removeTodo}
            updateTodo = {updateTodo}></Todo>
        </div>
    )
}

export default TodoList
