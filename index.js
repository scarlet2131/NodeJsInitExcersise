
const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// In-memory storage for tasks
const tasks = [];

// Retrieve all tasks
app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;

  // Error handling for missing fields
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }

  const newTask = { id: uuidv4(), title, description, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a specific task by ID
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const task = tasks.find(task => task.id === id);

  // Error handling for non-existent task
  if (!task) {
    return res.status(404).json({ error: `Task with ID ${id} not found.` });
  }

  // Update the task fields
  if (title !== undefined) task.title = title;
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;

  res.status(200).json({ message: 'Task updated successfully', task });
});

// Delete a specific task by ID
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === id);

  // Error handling for non-existent task
  if (taskIndex === -1) {
    return res.status(404).json({ error: `Task with ID ${id} not found.` });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.status(200).json({ message: 'Task deleted successfully', deletedTask: deletedTask[0] });
});

// Start the server
app.listen(port, () => {
  console.log(`Task management API running at http://localhost:${port}`);
});
