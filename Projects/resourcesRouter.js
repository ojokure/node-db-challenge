const express = require("express");

const Resources = require("../Projects/resources-model");

const resourcesRouter = express.Router();

resourcesRouter.get("/", (req, res) => {
  Resources.find()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ 
          err, 
          message: "Failed to get resources" });
    });
});

module.exports = resourcesRouter;
