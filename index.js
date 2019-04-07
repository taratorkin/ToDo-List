const express = require('express');
const mongoose = require('mongoose');
const validator = require('express-validator');
const passport = require('passport');
const keys = require('./config/keys.js');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
require('./models/User.js');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true }).then(() => {
  console.log('connected successfully');
}).catch(err => {
  console.log(err);
});

const app = express();
console.log(process.env.NODE_ENV);

require('./services/passport.js');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(validator());

app.use(flash());

require('./routes/authRoutes.js')(app);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
