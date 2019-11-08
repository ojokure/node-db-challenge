const express = require("express");

const Tasks = require("../Projects/tasks-model");

const tasksRouter = express.Router();

tasksRouter.get("/", (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.json(tasks);
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
