const db = require("../data/dbConfig");

module.exports = {
  find,
  insert
};

function find() {
  return db("tasks");
}