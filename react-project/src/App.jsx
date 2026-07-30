// class component
// functional component
//jsx => javascript xml
//component => resuable
//props => pass value to child component

import { useState } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Create wireframe design",
      description: "Create task management wireframe web page layout",
      priority: "High",
      dueDate: "2026-7-29",
      status: "Completed",
    },
    {
      id: 2,
      title: "Create github account",
      description: "Gihub is used to store and manage your project",
      priority: "Medium",
      dueDate: "2026-7-31",
      status: "Pending",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  console.log(title);

  // array of object

  // let obj = {
  //   name : "FIIT" ,
  //   course : "MERN stack"
  // }

  // console.log(obj.name , obj.course );
  const addTask = (e) => {
    e.preventDefault();

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

    setTitle("");
    setDescription("");
    setPriority("");
    setDate("");
  };

  return (
    <div className="parent-container">
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
        <table border={5}>
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Description</th>
            <th>priority</th>
            <th>Due date</th>
            <th>Status</th>
          </tr>

          {tasks.length === 0 ? (
            <tr>
              <td colSpan={6}>Task not found</td>
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
