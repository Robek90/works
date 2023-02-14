const express = require("express");
const app = express();
const mockData = require("./mockData");

app.get("/booksList", (req, res) => {
  res.json(mockData.mockData);
});

app.use(express.urlencoded());

app.use(express.json());

app.post('/newBook', function(request, response){
  console.log(request.body);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./server_db/books.sqlite3');

// db.serialize(() => {
//   db.run("CREATE TABLE Books (info TEXT)");

//   const stmt = db.prepare("INSERT INTO Books VALUES (?)");
//   for (let i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM Books", (err, row) => {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();