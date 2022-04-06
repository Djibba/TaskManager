require('dotenv').config();
const mongoose = require('mongoose');
const connectionString = "mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@"+ process.env.DB_HOST +"/" + process.env.DB + "?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection for database successfully !'))
    .catch((err) => console.log(err));