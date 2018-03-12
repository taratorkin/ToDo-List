const passport = require('passport');

module.exports = app => {

  app.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get('/google/callback', passport.authenticate('google'));

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
  });
}
