const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
require('./models/User')
require('./services/passport');


const PORT = process.env.PORT || 5000;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

app.listen(PORT, () => {
  console.log(`App is listening on PORT:${PORT}`);
});


