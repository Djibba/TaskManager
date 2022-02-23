const mongoose = require('mongoose');

const getAllTasks = (req, res, next) => {
    res.send('all tasks');
};

module.exports = {
    getAllTasks
};