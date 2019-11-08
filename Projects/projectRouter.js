const express = require("express");

const Projects = require("../Projects/projects-model");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).json({ 
          err, 
          message: "Failed to get projects" });
    });
});


module.exports = projectsRouter;
