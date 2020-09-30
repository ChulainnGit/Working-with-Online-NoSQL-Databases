const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
      
const connect = require("./connection"); // url from connect module
const client = new MongoClient(connect.database.url, { useUnifiedTopology: true } );

//This file reads/finds files from our db


 

// Use connect method to connect to the server
client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  const db = client.db(dbName);
  //This is the callback function 
  findDocuments(db, function() {
    client.close();
  });




});


const dbName = 'store';


//Displays all customers
const findDocuments = function(db, callback) {
    // from customers
    const collection = db.collection('customer');
    // Find data
    collection.find({}).toArray(function(err, docs) {
      // using the assert module for testing
      assert.equal(err, null);
      // check if we done it right
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
}