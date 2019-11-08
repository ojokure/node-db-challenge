const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// const projectsRouter = require("./Projects/projectRouter");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send(" <h1> YO !! </>");
});

// server.use("/api/projects", projectsRouter);

module.exports = server;