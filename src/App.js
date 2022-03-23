import './App.css';
import Header from './comps/Header';
import Tasks from './comps/Tasks';
import AddTask from './comps/AddTask';

import { useState } from 'react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks ] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 4:20',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 7th at 9:20',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 9th at 7:20',
            reminder: false,
        }
    ]
);

//ADD task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}
  return (
    <div className="App">
      <header className="App-header">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} propShowAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks
      onToggle={toggleReminder}
      onDelete={deleteTask}
      tasks={tasks}/> : 'No tasks'}
      </header>
    </div>
  );
}

export default App;

/*border-left: 5px solid green; */