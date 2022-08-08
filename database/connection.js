const knex = require("knex");

const connection = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 8889,
    user: "root",
    password: "root",
    database: "sekolah_web",
  },
});

module.exports = connection;
