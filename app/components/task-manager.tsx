import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a To-Do App" },
    { id: 3, text: "Master JavaScript" },
    { id: 4, text: "Explore TypeScript" },
  ]);


  const deleteTask = (taskId: number) => {
    setTasks((currentTasks) => 
        currentTasks.filter((task) => task.id !== taskId));
    alert(`Deleted task with id: ${taskId}`);
  };

  return (
   <div className="p-5 max-w-md mx-auto bg-gray-100 rounded-lg shadow">
        <ul className="list-none space-y-2">
        {tasks.map((task) => (
            <li key={task.id} 
                className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
                <span>{task.text}</span>
                <button 
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </li>
        ))}
        </ul>
   </div>
  );
}

export default TaskManager;