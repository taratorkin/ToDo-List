const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoDb = require('../database/mongo.js');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/google/callback',
}, (accessToken, refreshToken, profile, done) => {
  mongoDb({
    googleID: profile.id,
    googleEmail: profile.emails[0].value
  })
}));
