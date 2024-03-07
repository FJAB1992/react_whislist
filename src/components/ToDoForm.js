import React, { useState } from "react";

export const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value);
        addTodo(value);
        setValue("");
    }
    return (
        <div>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" value={value}
                    placeholder="¿Que hay que hacer hoy?"
                    onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="todo-btn">Añadir tarea</button>
            </form>
        </div>
    );
};

export default ToDoForm;