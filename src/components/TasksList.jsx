import TaskForm from "./TaskForm";
import "../styles/TasksList.css";
import { useState } from "react";
import Task from "./Task";

function TasksList() {
    const [tasks, setTasks] = useState([]);

    return (
        <>
            <TaskForm />
            <div className="tasks-list-container">
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            text={task.text}
                            completed={task.completed}
                        />

                    )
                }

            </div>

        </>
    )
}

export default TasksList;
