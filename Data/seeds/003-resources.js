exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "npm knex",
          resource_desc: " to transpile SQL to the server",
          project_id:2
        },
        {
          id: 2,
          resource_name: "npm react",
          resource_desc: "CRA",
          project_id: 1
        },
        {
          id: 3,
          resource_name: "cors",
          resource_desc: "to enable cross origin request",
          project_id: 2
        },
        {
          id: 4,
          resource_name: "npm react-router",
          resource_desc: " for SPA routing and client side routing",
          project_id: 1
        },
        {
          id: 5,
          resource_name: "loader-spinner",
          resource_desc: "a loading image tht displays on the UI",
          project_id: 1
        },
        {
          id: 6,
          resource_name: "sleep",
          resource_desc: "do nothing baby ",
          project_id: 3
        },
        {
          id: 7,
          resource_name: "react-toastify",
          resource_desc: "a pop-up/slide for notification on the UI",
          project_id: 1
        }
      ]);
    });
};
