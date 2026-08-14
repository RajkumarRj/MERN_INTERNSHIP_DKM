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
function App() {
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="parent-container">
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "white" }}
        position="top-right"
        autoClose={3000}
      />
      <Header />

      <TaskForm addTask={addTask} />

     
      {/* list rendering  */}

      {/* conditional rendering  */}

      <section className="table-container">
        <table>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Description</th>
            <th>priority</th>
            <th>Due date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

          {tasks.length === 0 ? (
            <tr>
              <td colSpan={7}>Task not found</td>
            </tr>
          ) : (
            tasks.map((task) => (
              <tr>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.dueDate}</td>
                <td>{task.status}</td>
                <td>
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => updateStatus(task.id)}
                    disabled={task.status === "Completed"}
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      backgroundColor:
                        task.status === "Completed" ? "gray" : "green",
                      color: "white",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))
          )}
        </table>
      </section>

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
