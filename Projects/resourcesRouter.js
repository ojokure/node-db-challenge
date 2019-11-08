const express = require("express");

const Resources = require("../Projects/resources-model");

const resourceRouter = express.Router();

resourceRouter.get("/", (req, res) => {
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