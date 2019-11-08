const db = require("../data/dbConfig");

module.exports = {
  find,
};

function find() {
  return db.select("id","resource_name","resource_desc").from('resources');
}

// select id, resource_name, resource_desc from resources