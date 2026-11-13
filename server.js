const express = require("express");
const cors = require("cors");

const {
  getItems,
  addItem,
  updateItem,
  deleteItem
} = require("./data.js");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Backend status
app.get("/api/status", (req, res) => {
  res.json({ status: "ok" });
});

// Get all tasks
app.get("/api/items", (req, res) => {
  res.json(getItems());
});

// Add a new task
app.post("/api/items", (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({
      error: "Task title is required"
    });
  }

  const newItem = addItem(req.body);

  res.status(201).json(newItem);
});

// Edit a task
app.put("/api/items/:id", (req, res) => {
  const updatedItem = updateItem(
    req.params.id,
    req.body
  );

  if (!updatedItem) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(updatedItem);
});

// Delete a task
app.delete("/api/items/:id", (req, res) => {
  const deleted = deleteItem(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json({ message: "Task deleted successfully" });
});

// Start server
console.log("ZAPUSHCHEN PRAVILNYI FAYL SERVERA!");
app.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT}`
  );
});