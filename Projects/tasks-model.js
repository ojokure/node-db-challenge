const db = require("../data/dbConfig");

module.exports = {
  getTasks,
};

function getTasks() {
  return db.select("project_name","project_desc","task_desc").from('tasks').
  join("projects","tasks.project_id","=","projects.id")
}

// select project_name, project_desc, task_desc from tasks
// join projects on tasks.project_id = projects.id