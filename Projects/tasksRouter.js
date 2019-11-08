const express = require("express");

const Tasks = require("../Projects/tasks-model");

const taskRouter = express.Router();

taskRouter.get("/", (req, res) => {
  Tasks.find()
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
