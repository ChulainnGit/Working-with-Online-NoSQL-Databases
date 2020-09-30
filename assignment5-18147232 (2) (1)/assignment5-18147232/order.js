const MongoClient = require('mongodb').MongoClient;

const connect = require("./connect");

const assert = require('assert');

const dbName = 'store';

var url =  "mongodb+srv://dbuser:mnbv@cluster0-ynd81.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(connect.database.url, { useUnifiedTopology: true } );

client.connect(function(err) {
  
  assert.equal(null, err);
  console.log("Connected successfully to server");

 
  const db = client.db(dbName);
  
}); 

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("store");
  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'customer',
         localField: 'email',
         foreignField: 'email',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
	console.log("Orders for Paul and Luke found");
    db.close();
  });
});