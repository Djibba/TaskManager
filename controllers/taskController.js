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

const getSingleTask = async (req, res, next) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({_id: taskID})

        if (!task) {
            return res.status(404).json({ message: `No task with id : ${taskID}`})
        }

        res.status(200).json({ id: req.params.id })
    } catch (error) {
        res.status(500).json( { message: error })
    }
};

const updateTask = (req, res, next) => {

};

const deleteTask = async (req, res, next) => {
    try{
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID})

        if (!task){
            return res.status(404).json({ message: `No task with id : ${taskID}`})
        }
    }catch (error){
        res.status(500).json( { message: error })
    }
};
module.exports = {
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTask
};