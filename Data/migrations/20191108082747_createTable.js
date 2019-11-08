
exports.up = function(knex) {
    return knex.schema
      .createTable("projects", table => {
        table.increments();
        table
          .string("project_name", 100)
          .unique()
          .notNullable();
        table.string("project_desc", 360);
        table
          .boolean('completed')
          .defaultTo(false)
          .notNullable();
      })
      .createTable("tasks", table => {
        table.increments();
        table
          .string("task_desc", 360)
          .unique()
          .notNullable();
        table.string("notes", 100);
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");
        table
          .boolean('completed')
          .defaultTo(false)
          .notNullable();
      })
      .createTable("resources", table => {
        table.increments();
        table
          .string("resource_name", 100)
          .notNullable()
          .unique();
        table.string("resource_desc");
        table
          .integer("project_id")
          .unsigned()
          .references("id")
          .inTable("projects");
      })
      .createTable("projectDetails", table => {
        table.increments();
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects");
        table
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources");
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("projects")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("projectDetails");
  };
