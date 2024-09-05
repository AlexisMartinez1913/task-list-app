import "../styles/TaskForm.css";

function TaskForm(props) {
    return (
        <form className="task-form">
            <input 
            type="text"
            className="task-input"
            placeholder="Write a Task"
            name="text"
            />
            <button className="task-button">Add Task</button>

        </form>
    )
}

export default TaskForm;
