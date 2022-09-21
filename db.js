const { Pool } = require("pg");

const connectionString = process.env.DB_URL; //Can be found in the Details page

const pool = new Pool({
    connectionString,
});

console.log("db", connectionString);

module.exports = pool;