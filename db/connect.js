const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://djibba:djibba@dbsnode.p8yc9.mongodb.net/taskDatabase?retryWrites=true&w=majority';

mongoose.connect(connectionString)
    .then(() => console.log('Connection for database successfully !'))
    .catch((err) => console.log(err));