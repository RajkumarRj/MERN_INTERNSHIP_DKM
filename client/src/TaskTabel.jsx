import React from "react";

const TaskTabel = ({ tasks, deleteTask, updateStatus, onEdit }) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

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
          tasks.map((task, index) => {
            // expire check
            const taskDate = new Date(task.dueDate);

            const isOverDue = taskDate < today && task.status !== "Completed";

            const displayStatus = isOverDue ? "Incomplete" : task.status;

            return (
              <tr key={task.id}>
                <td>{index + 1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.priority}</td>
                <td>{task.dueDate}</td>
                <td
                  style={{
                    color: isOverDue ? "red" : "white",
                    fontWeight: isOverDue ? "bold" : "normal",
                  }}
                >
                  {displayStatus}
                </td>
                <td>
                  <button
                    onClick={() => onEdit(task)}
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding:"5px",
                      marginRight:"10px"
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    disabled={isOverDue}
                    style={{
                      backgroundColor: isOverDue ? "#ffcccc" : "red",
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
                    disabled={isOverDue || task.status === "Completed"}
                    style={{
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      backgroundColor:
                        isOverDue || task.status === "Completed"
                          ? "gray"
                          : "green",
                      color: "white",
                      cursor: "pointer",
                      marginLeft: "10px",
                    }}
                  >
                    Complete
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </table>
    </section>
  );
};

export default TaskTabel;
