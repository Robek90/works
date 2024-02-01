const sqlite3 = require('sqlite3').verbose();
const https = require('https');
const querystring = require('querystring');

const SMARTCAPTCHA_SERVER_KEY = "ysc2_ltlUcYhTURZRsbPQsmycfbiJRhsjuilt6gSgC17l0415f285";

let db = new sqlite3.Database("./server_db/workshopDB.sqlite3", sqlite3.OPEN_READWRITE,(err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the review database.');
});

function checkCaptcha(token, callback) {
  const options = {
      hostname: 'smartcaptcha.yandexcloud.net',
      port: 443,
      path: '/validate?' + querystring.stringify({
          secret: SMARTCAPTCHA_SERVER_KEY,
          token: token,
      }),
      method: 'GET',
  };

  const req = https.request(options, (res) => {
      res.on('data', (content) => {
          if (res.statusCode !== 200) {
              console.error(`Allow access due to an error: code=${res.statusCode}; message=${content}`);
              callback(true);
              return;
          }
          callback(JSON.parse(content).status === 'ok');
      });
  });
  req.on('error', (error) => {
      console.error(error);
      callback(true);
  });
  req.end();
};

function getReviewDB() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM review", function(err, rows) {
      if(err) {
        console.log(err)
      }
      resolve(rows);
    })
  });
};

function setReviewDB(fb) {
  let col = Object.keys(fb).join(", ");
  let placeholder = Object.keys(fb).fill('?').join(", ");

  db.run('INSERT INTO review (' + col + ') VALUES (' + placeholder + ')',Object.values(fb)), (err)=>{
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  }
};

function getProductDB() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM product", function(err, rows) {
      if(err) {
        console.log(err)
      }
      resolve(rows);
    })
  });
};

function getCatalogDB() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM catalog", function(err, rows) {
      if(err) {
        console.log(err)
      }
      resolve(rows);
    })
  });
};

function getCategoryDB() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM category", function(err, rows) {
      if(err) {
        console.log(err)
      }
      resolve(rows);
    })
  });
};
// function editDataBase(book, rowid) {
//   let col = Object.keys(book).filter(item=> item !== 'rowid').join(", ");
//   let placeholder = Object.keys(book).filter(item=> item !== 'rowid').fill('?').join(", ");
//   let values = Object.values(book).filter(item=> item !== rowid)

//   db.run('UPDATE whbooks SET (' + col + ') = (' + placeholder + ') WHERE rowid = (' + rowid + ')' , values), (err)=>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('success');
//     }
//   }
// };

// function deleteRowDataBase(rowid) {
//   db.run(`DELETE FROM whbooks WHERE rowid = ${rowid}`), (err)=>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('success');
//     }
//   }
// };

module.exports.db={checkCaptcha,setReviewDB ,getReviewDB, getProductDB, getCatalogDB, getCategoryDB}