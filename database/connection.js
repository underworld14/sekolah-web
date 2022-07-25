const knex = require("knex");

const connection = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "",
    database: "sekolah_app",
  },
});

module.exports = connection;
