const express = require("express");

const Projects = require("../Projects/projects-model");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      projects.map(project => {
        if (project.completed === 0) {
          return (project.completed = false);
        } else {
          return (project.completed = true);
        }
      });
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get projects"
      });
    });
});

projectsRouter.post("/", (req, res) => {
  Projects.add(req.body)
    .then(project => {
      project.completed === 0
        ? (project.completed = false)
        : (project.completed = true);
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to post project"
      });
    });
});

module.exports = projectsRouter;
