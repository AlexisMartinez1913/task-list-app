import '../styles/Task.css';
import { AiFillCloseCircle } from "react-icons/ai";

function Task({ text, completed }) {
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className="task-text">
                {text}

            </div>
            <div className="task-container-icons">
            <AiFillCloseCircle className="task-icon" />

            </div>

        </div>
    )
}

export default Task;
