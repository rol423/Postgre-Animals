const pg = require("pg");

const conString = process.env.DB_URL; //Can be found in the Details page
const client = new pg.Client({
  host: process.env.PGHOST,
  port: 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

client.connect();
client.query('SELECT NOW() AS "theTime"', function (err, result) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  console.log(result.rows[0].theTime);
  // >> output: 2018-08-23T14:02:57.117Z
});

// client.query("SELECT * FROM animals", function (err, result) {
//   if (err) {
//     return console.error("error running query", err);
//   }
//   console.log(result);
//   client.end();
// });
