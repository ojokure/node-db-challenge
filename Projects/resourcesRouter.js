const express = require("express");

const Resources = require("../Projects/resources-model");

const resourcesRouter = express.Router();

resourcesRouter.get("/", (req, res) => {
  Resources.find()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get resources"
      });
    });
});

resourcesRouter.post("/", (req, res) => {
  Resources.add(req.body)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get resources"
      });
    });
});

module.exports = resourcesRouter;
