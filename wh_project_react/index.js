const express = require('express');
const app = express();

const multer  = require('multer');

const dbApi = require('./server_db/db_module.js');

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
  dbApi.db.getDataBase().then(x=>{
    res.json(x)
  })
});

app.use(express.json());

app.post("/verification", (req, res) => {
  dbApi.db.checkUserVerification()
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
  dbApi.db.insertDataBase(req.body)
  res.json({ message:  "Книга успешно добавлена" });
});

app.post('/deleteBook', upload.single("files"), (req, res) => {
  dbApi.db.deleteRowDataBase(req.body['id'])
  res.json({ message:  "Книга успешно удалена" });
});

app.post("/editBook", upload.single("files"), (req, res) => {
  dbApi.db.editDataBase(req.body, req.body['rowid'])
  res.json({ message:  "Книга успешно изменена" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));