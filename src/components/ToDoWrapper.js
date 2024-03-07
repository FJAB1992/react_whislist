import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from 'uuid';
import ToDo from "./ToDo";
uuidv4();
export const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodo = { 
            id: uuidv4(), task: todo, completed: false, isEditing: false };

        setTodos([...todos, newTodo]);
        console.log(todos);
    }

    const toggleCompleted = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    return (
        <div className="TodoWrapper">
            <h1>Tareas pendientes</h1>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) =>
                (<ToDo task={todo} key={index} toggleCompleted={toggleCompleted} />))
            }

        </div>
    );
};

export default ToDoWrapper;
