const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
      
const connect = require("./connection"); // url from connect module
const client = new MongoClient(connect.database.url, { useUnifiedTopology: true } );

//This file updates tables/collections to our db


 

// Use connect method to connect to the server
client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  const db = client.db(dbName);
  
  //This call back function updates email addresses
  updateDocument(db, function() {
    client.close();
  });




});


const dbName = 'store';


const updateDocument = function(db, callback) {
    // Get the customer collection
    const collection = db.collection('customer');
    // Updating document where email is "max@gmail.ie", set to "Max@live.ie"
    collection.updateOne({email : "Max@gmail.ie" }
      , { $set: { email :  "Max@live.ie" } }, function(err, result) {
      //assert module for testing
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      // all good if we're here
      console.log("Updated the document: reset email field set to Max@live.ie");
      callback(result);
    });  
  }