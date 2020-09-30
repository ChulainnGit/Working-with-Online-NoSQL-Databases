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
  //This is the callback function for a more specific search
  findFiltered(db, function() {
    client.close();
  });




});


const dbName = 'store';




const findFiltered = function(db, callback) {
    // Get the customer collection
    const collection = db.collection('customer');
    // Find some documents with a filter
    collection.find({'lname': 'Jones'}).toArray(function(err, docs) {
      // using the assert module for testing
      assert.equal(err, null);
      console.log("Found the following records");
      
      console.log(docs);
      callback(docs);
    });
} 