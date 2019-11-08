const db = require("../data/dbConfig");

module.exports = {
  getTasks,
  findById,
  addTask
};

function getTasks() {
  return db.select("project_name","project_desc","task_desc").from('tasks').
  join("projects","tasks.project_id","=","projects.id")
}

function findById(id) {
    return db("tasks")
      .where({ id })
      .first();
  }

function addTask(task) {
    return db("tasks")
      .insert(task, "id")
      .then(([id]) => {
        return findById(id);
      });
  }

// select project_name, project_desc, task_desc from tasks
// join projects on tasks.project_id = projects.id