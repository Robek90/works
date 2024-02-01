const express = require('express');
const app = express();

const dbApi = require('./server_db/db_module.js');

app.get("/product", (req, res) => {
  dbApi.db.getProductDB().then(x=>{
    res.json(x)
  })
});

app.get("/catalog", (req, res) => {
  dbApi.db.getCatalogDB().then(x=>{
    res.json(x)
  })
});

app.get("/category", (req, res) => {
  dbApi.db.getCategoryDB().then(x=>{
    res.json(x)
  })
});

app.get("/getreview", (req, res) => {
  dbApi.db.getReviewDB().then(x=> {
    res.json(x)
  })
});

app.use(express.json());

app.post("/setreview", (req, res) => {
  dbApi.db.setReviewDB(req.body)
  res.json("add review")
});

app.post("/smartcaptcha", (req, res) => {
  let token = req.body.token;

  dbApi.db.checkCaptcha(token, (passed) => {
      if (passed) {
        res.json(true)
      } else {
        res.json(false)
      }
  })
});

// app.post("/verification", (req, res) => {
//   dbApi.db.checkUserVerification()
//     .then(value=>{
//       value.map(item=>{
//         if(item['name'] === req.body.first_name && item['uid'] === req.body.uid){
//           res.json(true)
//         } else {
//           res.json(false)
//         }
//       })})
//     .catch(err=>console.log(err))
// });

// app.post('/addNewBook', upload.single("files"), (req, res) => {
//   dbApi.db.insertDataBase(req.body)
//   res.json({ message:  "Книга успешно добавлена" });
// });

// app.post('/deleteBook', upload.single("files"), (req, res) => {
//   dbApi.db.deleteRowDataBase(req.body['id'])
//   res.json({ message:  "Книга успешно удалена" });
// });

// app.post("/editBook", upload.single("files"), (req, res) => {
//   dbApi.db.editDataBase(req.body, req.body['rowid'])
//   res.json({ message:  "Книга успешно изменена" });
// });


const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));