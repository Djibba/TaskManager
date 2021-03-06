require('./db/connect');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const task = require('./routes/taskRoute');

const app = express();

/* require('./config/dbconfig'); */

app.use(express.static('public'));
/* app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'ejs'); */

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(session({
    secret: 'taskmanager',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/',task);


module.exports = app;