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

module.exports = tasksRouter;
