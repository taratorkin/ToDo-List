const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const validator = require('express-validator');
const passport = require('passport');
const keys = require('./config/keys.js');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
require('./models/User.js');
require('./services/passport.js');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.static('/client/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(validator());

app.use(flash());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
