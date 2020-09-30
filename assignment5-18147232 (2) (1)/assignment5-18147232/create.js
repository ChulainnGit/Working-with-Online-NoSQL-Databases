const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
      
const connect = require("./connection"); // url from connect module
const client = new MongoClient(connect.database.url, { useUnifiedTopology: true } );

//This file adds all the tables/collections to our db


 

// Use connect method to connect to the server
client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
  const db = client.db(dbName);
  
  insertDocuments(db, function() {
    client.close();
  });




});


const dbName = 'store';









 const insertDocuments = function(db, callback) {
  // Using the "documents" collection
  const collection = db.collection('customer'); 
  // Insert some documents
  collection.insertMany([
	 {"title":"Mr","fname":"Max","lname":"Doyle","email":"Max@gmail.ie","mobile":"0856937354","address":"2 beach hill", "shipping": "2 beach hill","town":"parkland","county":"dublin","eircode":"d11"},
    {"title":"Mr","fname":"Jake","lname":"Kelly","email":"Jakey@gmail.ie","mobile":"0846955120","address":"11 the glade ", "shipping": "11 the glade","town":"rothland","county":"louth","eircode":"l22"}, 
    {"title":"Dr","fname":"Carl","lname":"Jones","email":"carly@gmail.ie","mobile":"0854020733","address":"5 manor road","shipping": "5 manor road","town":"cedarbrooke","county":"dublin","eircode":"d20"},
	{"title":"Dr","fname":"Luke","lname":"Ryan","email":"lukey@gmail.ie","mobile":"0874217931","address":"11 bluehill road","shipping": "5 po box","town":"elendale","county":"dublin","eircode":"d22"},
	{"title":"Dr","fname":"Paul","lname":"Smith","email":"pauly@gmail.ie","mobile":"083023733","address":"28 grand manor ","shipping": "28 grand manor","town":"burrlough","county":"dublin","eircode":"d10"}
  ], function(err, result) {
    // using the assert module for testing
    assert.equal(err, null);
    assert.equal(5, result.result.n);
    assert.equal(5, result.ops.length);
    // all good if we get to here
    console.log("Inserted 5 documents into the collection");
    callback(result);
  });
} 

/*
  //This code adds orders to the db
  const insertDocuments = function(db, callback) {
  // Using the "documents" collection
  const collection = db.collection('orders'); 
  // Insert some documents
  collection.insertMany([
	 {"email": "pauly@gmail.ie", "order#": "132753", "date": "23/03/20"},
     {"email": "pauly@gmail.ie", "order#": "148958", "date": "28/03/20"}, 
     {"email": "lukey@gmail.ie", "order#": "152742", "date": "02/04/20"}
  ], function(err, result) {
    // using the assert module for testing
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    // all good if we get to here
    console.log("Inserted 3 orders into the collection");
    callback(result);
  });
} */


/*
//Uncomment this code to add items to db
const insertDocuments = function(db, callback) {
  // Using the "items" collection
  const collection = db.collection('items'); 
  
  collection.insertMany([
	 {"manufacturer": "apple", "model": "iphone xr", "price": "500"},
    {"manufacturer": "samsung", "model": "galaxy 9", "price": "600"}, 
    {"manufacturer": "apple", "model": "iphone 8", "price": "300"},
    {"manufacturer": "huawei", "model": "p30", "price": "200"}
  ], function(err, result) {
   
    assert.equal(err, null);
    assert.equal(4, result.result.n);
    assert.equal(4, result.ops.length);
    
    console.log("Inserted 4 documents into the collection");
    callback(result);
  });
}*/




