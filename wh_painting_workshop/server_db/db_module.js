const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./server_db/workshopDB.sqlite3", sqlite3.OPEN_READWRITE,(err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the review database.');
});

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

module.exports.db={setReviewDB ,getReviewDB, getProductDB, getCatalogDB, getCategoryDB}