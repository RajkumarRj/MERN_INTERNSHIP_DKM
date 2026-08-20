import React, { useState } from "react";
import { toast } from "react-toastify";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const generateDescription = async () => {
    if (title.trim() === "") {
      toast.warning("Please type a Task Title first");
      return;
    }
    setIsThinking(true);

    try {
      const apikey = import.meta.env.VITE_GEMINI_API_KEY;

      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apikey}`;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Write a very short, two-sentence task description for the task titled : "${title}"`,
                },
              ],
            },
          ],
        }),
      });

      const data = await response.json();
      console.log(data.candidates[0].content.parts[0].text);

      if (!response.ok) {
        throw new Error(data.error?.message || "Api request failed");
      }

      const aiText = data.candidates[0].content.parts[0].text;

      setDescription(aiText.trim());


      toast.success("AI generated a description");
    } catch (error) {
      toast.error("Something went wrong with ai ");
      console.log(error.message);
    } finally {
      setIsThinking(false);
    }
  };

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
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="text"
                style={{ flex: 1 }}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Description for your title"
              />

              <button
                disabled={isThinking}
                onClick={generateDescription}
                type="button"
                style={{
                  backgroundColor: "#6366f1",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                {isThinking ? "Thinking..." : "AI Auto-Fill"}
              </button>
            </div>
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
