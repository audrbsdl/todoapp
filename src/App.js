import { useEffect, useState } from 'react';
import './App.css';
import Input from './components/Input';
import TaskList from './components/TaskList';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './storage';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    saveTasksToLocalStorage(newTasks);
  }

  return (
    <div className="App">
      <div className="App-header">What To Do?🤔</div>
      <Input onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
