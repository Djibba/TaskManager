const mongoose = require('mongoose');
const Task = require('../models/taskModel')

const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json( { msg: error })
    }
};

const createTasks = async (req, res, next) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json( { msg: error })
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