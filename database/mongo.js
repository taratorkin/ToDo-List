const MongoClient = require('mongodb').MongoClient;
const keys = require('../config/keys.js');

module.exports = (id) => {
  MongoClient.connect(keys.mongoURI, (err, db) => {
    const myDB = db.db('todo-list-dev')
    if (err) throw err;
    myDB.collection('users').findOne(id).then(existingUser => {
      if (existingUser) {

      } else {
        if (err) throw err;
        myDB.collection('users').insertOne(id);
        db.close();
      }
    }).catch((error) => {
      console.log(error);
    })
  })
}
