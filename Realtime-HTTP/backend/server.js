const express = require("express");
const cors = require("cors");

const port = 3006;
const app = express();

app.use(cors());
app.use(express.json());

const ISSUES = [
  {
    id: 1,
    title: "Fix login bug",
    section: "todo",
  },
  {
    id: 2,
    title: "Create dashboard",
    section: "in_progress",
  },
  {
    id: 3,
    title: "Add authentication",
    section: "todo",
  },
  {
    id: 4,
    title: "Deploy backend",
    section: "done",
  },
  {
    id: 5,
    title: "Create API",
    section: "in_progress",
  },
  {
    id: 6,
    title: "Fix navbar",
    section: "done",
  },
];

app.post("/issue", (req, res) => {
  const { title, section } = req.body;

  ISSUES.push({
    title,
    section,
    id: Math.random(),
  });

  res.json({
    message: "Issue created",
  });
});

app.get("/issues", (req, res) => {

  res.json({
    issues: ISSUES,
  });
});

app.post("/move", (req, res) => {
  const { issueId, newSection } = req.body;

  const issue = ISSUES.find((i) => i.id == issueId);

  if (issue) {
    issue.section = newSection;

    res.json({
      message: "done",
    });
  } else {
    res.status(404).json({
      message: "Issue not found",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

