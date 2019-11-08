exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "To do List",
          project_desc: " create a functional to do list app using react",
          completed: true
        },
        {
          id: 2,
          project_name: "Make an express server ",
          project_desc: "make a nodejs server ",
          completed: true
        },
        {
          id: 3,
          project_name: "faff",
          project_desc: "do nothing baby ",
          completed: false
        }
      ]);
    });
};
