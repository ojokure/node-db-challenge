exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          id: 1,
          task_desc: "Create a react app",
          notes: "okay then",
          project_id: 1,
          completed: true
        },
        {
          id: 2,
          task_desc: " import useState and useEffect hooks",
          notes: "dont forget to have parent component in scope",
          project_id: 1,
          completed: true
        },
        {
          id: 3,
          task_desc: "sleep all day baby",
          notes: "faff,faff and faff",
          project_id: 3,
          completed: false
        },
        {
          id: 4,
          task_desc: "npm install express",
          notes: "require is equivalent to import ",
          project_id: 2,
          completed: true
        },
        {
          id: 5,
          task_desc: "npm install helmet",
          notes: "protection",
          project_id: 2,
          completed: true
        }
      ]);
    });
};
