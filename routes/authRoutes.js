const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('../config/keys.js');
const { createUser } = require('../models/User.js');


const User = mongoose.model('users');

module.exports = app => {

  app.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get('/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    res.redirect('/');
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
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
        console.log(user);
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
