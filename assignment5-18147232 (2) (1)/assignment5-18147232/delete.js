const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
      
const connect = require("./connection"); // url from connect module
const client = new MongoClient(connect.database.url, { useUnifiedTopology: true } );

//This file deletes specific tables/collections from our db


 

// Use connect method to connect to the server
client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  const db = client.db(dbName);
  
  deleteDocument(db, function() {
    client.close();
  });




});


const dbName = 'store';


const deleteDocument = function(db, callback) {
    // Get the customer collection
    const collection = db.collection('customer');
    // Delete document where shipping is "5 manor road"
    collection.deleteOne({ shipping : "5 manor road" }, function(err, result) {
      //assert module for testing
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      //good if we here      
      console.log("Removed the document with shipping '5 manor road'");
      callback(result);
    });    
}