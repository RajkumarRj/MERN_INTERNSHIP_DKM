import React from 'react'

const TaskTabel = ({tasks, deleteTask, updateStatus}) => {

    
  return (
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
  );
}

export default TaskTabel
