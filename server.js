const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');


const PORT = process.env.PORT || 2222;

const app = express();
app.use(cors())

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

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

  // All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});