const express = require("express");

const Tasks = require("../Projects/tasks-model");

const tasksRouter = express.Router();

tasksRouter.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      tasks.map(task => {
        if (task.completed === 0) {
          return (task.completed = false);
        } else {
          return (task.completed = true);
        }
      });
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get tasks"
      });
    });
});

tasksRouter.post("/", (req, res) => {
  Tasks.addTask(req.body)
    .then(task => {
      task.completed === 0
        ? (task.completed = false)
        : (task.completed = true);
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to add"
      });
    });
});

module.exports = tasksRouter;
