import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from "axios"

function TodoList() {
    const [todos, setTodos] = useState ([]);
    const url = "http://localhost:5000/todo"
    useEffect(() => {
       getAllTodos()
    }, [])
    
    const getAllTodos = async() =>{
        const todos = await axios.get(url)
        setTodos(todos.data.todos)
    }
    const addTodo = todo => {
        if(!todo.title) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);        
    };
    const updateTodo = (todoId, newValue) => {
        if (!newValue.title) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos (updatedTodos);
    }

    return (
        <div>
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList;