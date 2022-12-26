import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        setTasks(data);
    }, []);
    
    function createTask({ Title, Description }) {
        setTasks([
            ...tasks,
            {
                title: Title,
                id: tasks.length,
                description: Description,
            },
        ]);
    }
    function deleteTask(id) {
        const NewTasks = tasks.filter((task) => task.id !== id);
        setTasks(NewTasks);
    }

    return (
        <TaskContext.Provider value={{
            tasks,createTask,deleteTask,

        }}>{props.children}</TaskContext.Provider>
    );
}
