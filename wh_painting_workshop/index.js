const express = require('express');
const axios = require('axios');
const cors = require('cors');
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
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.post("/setreview", (req, res) => {
  dbApi.db.setReviewDB(req.body)
  res.json("add review")
});

app.post("/recaptcha", async (req,res) => {
  try{
      let token = req.body.token;
      let response = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${'6Ldk9mspAAAAAO7YiVwD84H7Vjei4HWwtyhf2vBg'}&response=${token}`);
      
      return res.status(200).json({
          success:true,
          message: "Token successfully verified",
          data: response.data
      });
  }catch(error){
      return res.status(500).json({
          success:false,
          message: "Error verifying token"
      })
  }
});

app.post("/sendemail", (req,res) => {
  dbApi.db.emailEventHandler(req.body).then(x=> {
    res.json(x)
  })
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));