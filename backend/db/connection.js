const pgp = require("pg-promise")({});
const connectionString = "postgres://localhost/pin_trees";
const db = pgp(connectionString);

module.exports = db;
