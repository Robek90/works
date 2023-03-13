const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const multer  = require('multer');
const upload = multer({ dest: 'client/src/assets/images/uploads/' });

let db = new sqlite3.Database("./server_db/books.sqlite3", sqlite3.OPEN_READWRITE,(err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the warhammerBooksList database.');
});

app.get("/booksList", (req, res) => {
  getDataBase().then(x=>{
    res.json(x)
  })
});

app.use(express.json());

app.post("/verification", (req, res) => {
  if(req.body.uid === 323940){
    res.json(true)
  } else {
    res.json(false)
  }
});

app.post("/newBook", (req, res) => {
  let book = req.body
  insertDataBase(book);
});

app.post('/uploads', upload.single('avatar'), (req, res) => {
  console.log("Using Multer: ", req.body)
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

function getDataBase() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM whbooks", function(err, rows) {
      if(err) {
        console.log(err)
      }
      resolve(rows);
    })
  });
}

function insertDataBase(book) {
  let col = Object.keys(book).join(", ");
  let placeholder = Object.keys(book).fill('?').join(", ");

  db.run('INSERT INTO whbooks (' + col + ') VALUES (' + placeholder + ')',Object.values(book)), (err)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  }
}
// dataBaseClose()


// function dataBaseClose() {
//   db.close((err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('Close the database connection.')
//   });
// };
