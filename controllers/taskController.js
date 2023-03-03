const mongoose = require('mongoose');
const Task = require('../models/taskModel')

const getAllTasks = (req, res, next) => {
    res.send('all tasks');
};

const createTasks = async (req, res, next) => {

    try {
        
    } catch (error) {
        
    }
    
};

const getSingleTask = (req, res, next) => {

};

const updateTask = (req, res, next) => {

};

const deleteTask = (req, res, next) => {

};
module.exports = {
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTask
};