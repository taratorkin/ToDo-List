const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys.js');
const { createUser } = require('../models/User.js');
const UniqueId = require('uuid/v4');


const User = mongoose.model('users');

module.exports = app => {

  app.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get('/google/callback', (req, res, next) => {
    passport.authenticate('google', (err, user, info) => {
      if (err) {console.log(err)};
      req.login(user, (err) => {
        if (err) {console.log(err)};
      });
      res.redirect('/');
    })(req, res, next);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/currentUser', (req, res) => {
    res.send({userLogged: !!(req.user)});
  });

  app.post('/api/addList', (req, res) => {
    let arr = [...req.user.lists];
    arr.push({ id: UniqueId(), text: req.body.text });
    User.findOneAndUpdate({ _id: req.user._id }, { lists: arr }, { new: true } ).then(result => {
      res.send(result);
    }, err => {
      console.log(err)
    });
  });

  app.post('/api/updateList', (req, res) => {
    User.findOneAndUpdate({ 'lists._id': req.body.id }, { 'lists.$.text': req.body.payload }, { new: true }).then(result => {
      res.send(result);
    }, err => {
      console.log(err);
    });
  });

  app.get('/api/fetchLists', (req, res) => {
    User.findOne({ _id: req.user._id }).then(result => {
      res.send(result);
    });
  });

  app.post('/signup/localAuth', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let password2 = req.body.confirm-password;

    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Wrong email format').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('confirm-password', 'Password confirmation is required').notEmpty();
    req.checkBody('confirm-password', 'Passwords are not equal').equals(req.body.password);

    let errors = req.validationErrors();

    if(errors) {
      console.log(errors);
      res.redirect('/signup');
    } else {
      let newUser = new User({
        email: email,
        password: password
      });
      createUser(newUser, (err, user) => {
        if (err) throw err;
      }).then(result => {
        console.log(result);
        res.redirect('/signin');
      }, err => {
        console.log(err);
        res.redirect('/signup');
      });
    }

  });

  app.post('/signin/localAuth', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash: true
  }));
}
