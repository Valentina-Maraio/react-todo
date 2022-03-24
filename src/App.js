import "./App.css";
import Header from "./comps/Header";
import Tasks from "./comps/Tasks";
import AddTask from "./comps/AddTask";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./comps/Footer";
import About from "./comps/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer);
      };
      getTasks();
    },
    [
      /*dependencies*/
    ]
  );

  const fetchTasks = async () => {
    //from json server
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    //from json server
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //ADD task
  const addTask = async (task) => {
    /*const id = Math.floor(Math.random() * 10000) + 1;

  const newTask = { id, ...task}
  setTasks([...tasks, newTask])*/

    const res = await fetch("http://localhost:5000/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updaTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updaTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !data.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            propShowAdd={showAddTask}
          />
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              onToggle={toggleReminder}
              onDelete={deleteTask}
              tasks={tasks}
            />
          ) : (
            "No tasks"
          )}
          <Route path="/about" component={About} />
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;

/*border-left: 5px solid green; */
