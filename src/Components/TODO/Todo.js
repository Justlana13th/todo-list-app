import {useState} from "react";
import React from 'react';
import './Todo.css';
import TodoList from '../TodoList/TodoList';
import TodoCreate from '../TodoCreate/TodoCreate';

const Todo = () => {

    const [getTodos, setTodos] = useState([
        {id: 1, title: "Learn React"},
        {id: 2, title: "Read a Book"},
        {id: 3, title: "Sleep"},
        {id: 4, title: "Finish Final Year Project"}
    ])

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo))
        console.log(getTodos)
    }

    return (
        <div className="App">
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <TodoList dataTodos={getTodos} />
        </div>
    );
}

export default Todo;