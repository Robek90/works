const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const multer  = require('multer');

let db = new sqlite3.Database("./server_db/books.sqlite3", sqlite3.OPEN_READWRITE,(err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the warhammerBooksList database.');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'client/src/assets/images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

app.get("/booksList", (req, res) => {
  getDataBase().then(x=>{
    res.json(x)
  })
});

app.use(express.json());

app.post("/verification", (req, res) => {
  checkUserVerification()
    .then(value=>{
      value.map(item=>{
        if(item['name'] === req.body.first_name && item['uid'] === req.body.uid){
          res.json(true)
        } else {
          res.json(false)
        }
      })})
    .catch(err=>console.log(err))
});

app.post('/addNewBook', upload.single("files"), (req, res) => {
  insertDataBase(req.body)
  res.json({ message:  "Книга успешно добавлена" });
});

app.post('/deleteBook', upload.single("files"), (req, res) => {
  deleteRowDataBase(req.body['id'])
  res.json({ message:  "Книга успешно удалена" });
});

app.post("/editBook", upload.single("files"), (req, res) => {
  editDataBase(req.body, req.body['rowid'])
  res.json({ message:  "Книга успешно изменена" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

function checkUserVerification() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM userAuth", function(err, rows) {
      if(err) {
        console.log(err)
      }
      resolve(rows);
    })
  });
};

function getDataBase() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM whbooks", function(err, rows) {
      if(err) {
        console.log(err)
      }
      resolve(rows);
    })
  });
};

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
};

function editDataBase(book, rowid) {
  console.log(rowid);
  let col = Object.keys(book).filter(item=> item !== 'rowid').join(", ");
  let placeholder = Object.keys(book).filter(item=> item !== 'rowid').fill('?').join(", ");
  let values = Object.values(book).filter(item=> item !== rowid)

  db.run('UPDATE whbooks SET (' + col + ') = (' + placeholder + ') WHERE rowid = (' + rowid + ')' , values), (err)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  }
};

function deleteRowDataBase(rowid) {
  db.run(`DELETE FROM whbooks WHERE rowid = ${rowid}`), (err)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  }
};
