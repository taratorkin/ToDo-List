const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  googleID: String,
  email: String,
  password: String,
  lists: [{
    text: String
  }]
});

var User = mongoose.model('users', userSchema);

module.exports.validPassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}

module.exports.findUser = function(username, callback) {
  User.findOne({ email: username }, callback)
}

module.exports.createUser = function(newUser, callback) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
          newUser.password = hash;
          User = mongoose.model('users');
          User.findOne({
            email: newUser.email
          }).then(existingUser => {
            if (existingUser) {
              reject('User already exists');
            } else {
              newUser.save(callback);
              resolve('User was created');
            }
          });
      });
  });
});
}
