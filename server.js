'use strict';

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

if (process.env.NODE_ENV !== "production")
    require('dotenv').load();

require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log(`Node.js listening on port ${port} in ${process.env.NODE_ENV} environment!`);
});
