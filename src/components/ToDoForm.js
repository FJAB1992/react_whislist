import React, { useState } from "react";

export const ToDoForm = () => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
    }
    return (
        <div>
            <form className="ToDoForm" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" placeholder="¿Que hay que hacer hoy?" 
                onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="todo-btn">Añadir tarea</button>
            </form>
        </div>
    );
};

export default ToDoForm;