require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Postgre Animals");
});

app.get("/animals", async (req, res) => {
  try {
    console.log(pool);
    const { rows } = await pool.query("SELECT * FROM animals");
    console.log(rows);
   // res.send("OK");
    res.json(rows);
  } catch (err) {
    console.log(err);
  }
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
