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
function App() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  console.log(title);

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
  const addTask = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      toast.error("Task title cannot be empty!");
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      priority,
      dueDate: date,
      status: "Pending",
    };

    console.log(newTask);
    if (title !== "") {
      setTasks([...tasks, newTask]);
    }

    toast.success("Task added successfully");

    setTitle("");
    setDescription("");
    setPriority("");
    setDate("");
  };

  const deleteTask = (id) => {
    // filter
    const updateTask = tasks.filter((task) => task.id !== id);

    setTasks(updateTask);
    toast.info("Task deleted!");
  };

  return (
    <div className="parent-container">
      <ToastContainer
        toastStyle={{ backgroundColor: "black", color: "white" }}
        position="top-right"
        autoClose={3000}
      />
      <Header />

      <section className="form-container">
        <form onSubmit={(e) => addTask(e)}>
          {/* get input from user for task title  */}
          <div className="form-group">
            <label htmlFor="">Task title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Task title"
            />
          </div>
          {/* description  */}
          <div className="form-group">
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description for your title"
            />
          </div>

          {/* priority  */}

          <div className="form-group">
            <label htmlFor="">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>

              <option value="High">High</option>
            </select>
          </div>

          {/* Date  */}
          <div className="form-group">
            <label htmlFor=""> Due Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter Description for your title"
            />
          </div>

          {/* submit */}

          <div className="form-actions">
            <button type="submit">Add Task</button>
          </div>
        </form>
      </section>
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
    </div>
  );
}

export default App;
