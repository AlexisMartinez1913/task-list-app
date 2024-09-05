import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm(props) {

    const [input, setInput] = useState('');

    /*manejar entrada de texto del user */
    const handleChange = e => {
        //console.log('Escribiendo');
        setInput(e.target.value);
        //console.log(e.target.value);
    };


    const handleSubmit = e => {
        e.preventDefault();
        //console.log("enviando");
        const newTask = {
            id: '1',
            text: input,
            completed: false
            
        };
    }
    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input 
            type="text"
            className="task-input"
            placeholder="Write a Task"
            name="text"
            onChange={handleChange}
            />
            <button className="task-button">Add Task</button>

        </form>
    )
}

export default TaskForm;
