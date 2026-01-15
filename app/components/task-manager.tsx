import { useState, useCallback } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskManagerProps {
  initialTasks?: Task[];
}

const TaskManager = ({ initialTasks = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a To-Do App", completed: false },
  { id: 3, text: "Master JavaScript", completed: false },
  { id: 4, text: "Explore TypeScript", completed: false },
]}: TaskManagerProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const generateId = useCallback(() => {
    return Math.max(0, ...tasks.map(t => t.id)) + 1;
  }, [tasks]);

  const addTask = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task: Task = {
        id: generateId(),
        text: newTask.trim(),
        completed: false
      };
      setTasks(prev => [...prev, task]);
      setNewTask("");
      setStatusMessage(`Task "${task.text}" added successfully!`);
      setTimeout(() => setStatusMessage(""), 3000);
    }
  }, [newTask, generateId]);

  const deleteTask = useCallback((taskId: number) => {
    const taskToDelete = tasks.find(t => t.id === taskId);
    setTasks((currentTasks) => 
      currentTasks.filter((task) => task.id !== taskId)
    );
    if (taskToDelete) {
      setStatusMessage(`Deleted task: "${taskToDelete.text}"`);
      setTimeout(() => setStatusMessage(""), 3000);
    }
  }, [tasks]);

  const toggleComplete = useCallback((taskId: number) => {
    setTasks(currentTasks => 
      currentTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }, []);

  return (
   <div 
    className="p-5 max-w-md mx-auto bg-gray-100 rounded-lg shadow"
    role="region"
    aria-label="Task Manager Component"
   >
      {/* Status Message */}
      {statusMessage && (
        <div 
          className="mb-4 p-3 bg-green-100 text-green-800 rounded"
          role="alert"
          aria-live="polite"
        >
          {statusMessage}
        </div>
      )}

      {/* Add Task Form */}
      <form onSubmit={addTask} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="New task description"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            disabled={!newTask.trim()}
            aria-label="Add new task"
          >
            Add
          </button>
        </div>
      </form>

      {/* Task Count */}
      <p className="mb-3 text-sm text-gray-600">
        Tasks: {tasks.length} ({tasks.filter(t => t.completed).length} completed)
      </p>

      {/* Empty State */}
      {tasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p className="text-lg">No tasks yet!</p>
          <p className="text-sm">Add a task above to get started.</p>
        </div>
      ) : (
        <ul className="list-none space-y-2">
          {tasks.map((task) => (
            <li 
              key={task.id} 
              className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  aria-label={`Mark "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}`}
                />
                <span className={task.completed ? "line-through text-gray-400" : ""}>
                  {task.text}
                </span>
              </div>
              <button 
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ml-3"
                aria-label={`Delete task: ${task.text}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
   </div>
  );
}

export default TaskManager;
