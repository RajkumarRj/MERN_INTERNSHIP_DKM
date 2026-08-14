import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault();

    addTask({
      title,
      description,
      priority,
      dueDate: date,
    });

    setTitle("");
    setDescription("");
    setPriority("");
    setDate("");
  };

  return (
    <div>
      <section className="form-container">
        <form onSubmit={(e) => handleSubmit(e)}>
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
    </div>
  );
};

export default TaskForm;
