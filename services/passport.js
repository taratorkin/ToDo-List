const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const { validPassword, findUser } = require('../models/User.js');
const keys = require('../config/keys.js');


const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});

passport.use(new LocalStrategy({ usernameField: "email" }, (username, password, done) => {
    findUser(username, (err, user) => {
      if (err) throw err;
      if (!user) {
        done(null, false, { message: 'Wrong email or password' });
      } else {
        validPassword(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            done(null, user);
          } else {
            done(null, false, { message: 'Wrong email or password' });
          }
        });
      }
    });

  })
);

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: 'https://vast-journey-21746.herokuapp.com/google/callback'

}, (accessToken, refreshToken, profile, done) => {
      User.findOne({
        googleID: profile.id
      })
      .then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({
            googleID: profile.id,
            email: profile.emails[0].value
          }).save().then((newUser) => {
            done(null, newUser);
          });
        }
      });
}));
