import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import TaskContext from './taskContext';

function App() {

  const [taskList, setTaskList] = useState(() => {
    return JSON.parse(localStorage.getItem('tasks')) || []
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  const updateTask = (id, newTask) => {
    const newList = taskList.map((task, i) => {
      if (id === task.id) {
        return newTask;
      } else {
        return task;
      }
    });
    setTaskList(newList);
  };
  
  const addTask = (task) => {
    setTaskList(previosList => [...previosList, task]);
  };

  const deleteTask = (taskToRemove) => {
    setTaskList(
      taskList.filter(task => task.id !== taskToRemove.id)
    );
  };
  
  return (
    <div className="App">
      <div className="Main">
        <TaskContext.Provider value={{taskList, updateTask, addTask, deleteTask}}>
          <Header />
          <InputTask />
          <TaskList />
        </TaskContext.Provider>
      </div>
    </div>
  );
}

export default App;
