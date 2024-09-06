import TaskForm from "./TaskForm";
import "../styles/TasksList.css";
import { useState } from "react";
import Task from "./Task";

function TasksList() {
    const [tasks, setTasks] = useState([]);

    const addTask = task => {
        console.log(task);
        if (task.text.trim()) {
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
        }
    };

    const deleteTask = id => {
        //Si el task.id coincide con el id pasado, esa tarea será excluida del nuevo array.
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);

    };

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className="tasks-list-container">
                {
                    tasks.map((task) =>
                        <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            completed={task.completed}
                            deleteTask={deleteTask}
                        />

                    )
                }

            </div>

        </>
    )
}

export default TasksList;
