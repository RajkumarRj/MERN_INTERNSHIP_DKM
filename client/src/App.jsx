// class component
// functional component
//jsx => javascript xml
//component => resuable
//props => pass value to child component

import { useEffect, useState } from "react";
import Child from "./Child";
import "./App.css";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";
import TaskForm from "./TaskForm";
import TaskTabel from "./TaskTabel";
function App() {
  const [tasks, setTasks] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  console.log(title);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    fetch("https://mern-internship-dkm.onrender.com/home")
      .then((res) => res.json())
      .then((res) => console.log(res.message));
  }, []);

  // array of object

  // let obj = {
  //   name : "FIIT" ,
  //   course : "MERN stack"
  // }

  // console.log(obj.name , obj.course );
  const addTask = (newTask) => {
    const taskwithId = { ...newTask, status: "Pending", id: Date.now() };
    setTasks([...tasks, taskwithId]);
    toast.success("Task added successfully");
  };

  const deleteTask = (id) => {
    // filter
    const updateTask = tasks.filter((task) => task.id !== id);

    setTasks(updateTask);
    toast.info("Task deleted!");
  };

  const updateStatus = (id) => {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, status: "Completed" } : task,
    );
    console.log(updatedTask);
    setTasks(updatedTask);
    toast.success("Task changed to completed");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.log(editingTask);

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task,
    );

    setTasks(updatedTasks);
    setEditingTask(null);
    toast.success("Task updated!");
  };

  return (
    <div className="parent-container">
      {/* this is toatcontainer from libray react-toastify */}
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "white" }}
        position="top-right"
        autoClose={3000}
      />
      <Header />

      <TaskForm addTask={addTask} editingTask={editingTask} editTask={editTask} cancelEdit = {()=>setEditingTask(null)} />

      {/* list rendering  */}

      {/* conditional rendering  */}

      <TaskTabel
        tasks={tasks}
        deleteTask={deleteTask}
        updateStatus={updateStatus}
        onEdit={(task) => setEditingTask(task)}
      />

      {/* 
      JSX 
      <h2>Hello React</h2>
      <h1>Hello DKM College</h1> */}

      {/* self closing tag  */}
      {/* <Child name="FIIT" />
      <Child name="Academy" /> */}

      {/* react -> component based architecture  */}
    </div>
  );
}

export default App;
