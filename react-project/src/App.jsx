// class component
// functional component
//jsx => javascript xml
//component => resuable
//props => pass value to child component

import { useState } from "react";
import Child from "./Child";

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

  console.log(tasks);

  // array of object

  // let obj = {
  //   name : "FIIT" ,
  //   course : "MERN stack"
  // }

  // console.log(obj.name , obj.course );

  return (
    <div>
      {/* list rendering  */}

      {/* conditional rendering  */}

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
