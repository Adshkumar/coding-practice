import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_ENDPOINT = "http://localhost:3006";

function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    setInterval(() => {
        axios.get(`${BACKEND_ENDPOINT}/issues`)
      .then((response) => {
        console.log("Issues received:", response.data);
        setIssues(response.data.issues || []);
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
      });
    }, 2000);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      {/* Todo */}
      <div style={{ flex: 1 }}>
        <h2>Todo</h2>
        <input id="todo_input" type="text" placeholder="issue" />
        <button
            onClick={() => {
            axios.post(`${BACKEND_ENDPOINT}/issue`, {
                title: document.getElementById("todo_input").value,
                section: "todo",
            });
            }}
        >
            Add Issue
        </button>
        {issues
          .filter((issue) => issue.section === "todo")
          .map((issue) => (
            <Card key={issue.id} title={issue.title} />
          ))}
      </div>

      {/* In Progress */}
      <div style={{ flex: 1 }}>
        <h2>In Progress</h2>
        <input id="in_progress" type="text" placeholder="progress" />
          <button onClick={() => {
            axios.post(`${BACKEND_ENDPOINT}/issue`, {
                title: document.getElementById("in_progress").value,
                section: "in_progress"
            })
          }}>Add progress</button>
        {issues
          .filter((issue) => issue.section === "in_progress")
          .map((issue) => (
            <Card key={issue.id} title={issue.title} />
          ))}
      </div>

      {/* Done */}
      <div style={{ flex: 1 }}>
        <h2>Done</h2>
          <input id="done_input" type="text" placeholder="done" />
          <button onClick={() => {
            axios.post(`${BACKEND_ENDPOINT}/issue`, {
                title: document.getElementById("done_input").value,
                section: "done"
            })
          }}>
            Done
          </button>
        {issues
          .filter((issue) => issue.section === "done")
          .map((issue) => (
            <Card key={issue.id} title={issue.title} />
          ))}
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
      }}
    >
      {title}
    </div>
  );
}

export default Home;
