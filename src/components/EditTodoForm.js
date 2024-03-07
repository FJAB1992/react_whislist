import React, { useState } from "react";

export const EditToDoForm = ({ editTodo,task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(value);
        editTodo(value, task.id);
        setValue("");
    }
    return (
        <div>
            <form className="TodoForm" onSubmit={handleSubmit}>
                <input type="text" className="todo-input" value={value}
                    placeholder="Modificar tarea"
                    onChange={(e) => setValue(e.target.value)} />
                <button type="submit" className="todo-btn">Modificar tarea</button>
            </form>
        </div>
    );
};

export default EditToDoForm;