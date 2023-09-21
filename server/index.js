const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const PORT = process.env.PORT || 2222;

const app = express();
app.use(cors())

const db = mysql.createConnection({
  host: "mulifepass2.ac.th",
  user: "admin_admindew",
  password:"Dew@0875350828#",
  database:'admin_kkdesign'

})

app.get("/attractions", (req, res) => {
  const sql = "SELECT * FROM attractions";
  db.query(sql,(err,data) => {
      if(err) return res.json(err);
      return res.json(data);
  })
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});