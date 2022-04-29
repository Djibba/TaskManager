const mongoose = require('mongoose');
const taskModel = require('../models/TaskModel');

const getAllTasks = async (req, res, next) => {
    try {

        const task = await taskModel.find();
        res.status(200).json({tasks: task});
        
    } catch (error) {
        res.status(500).json({message: error});
    }
};

const createTasks = async (req, res, next) => {
    try {

        const task = await taskModel.create(req.body);
        res.status(201).json(task);
        
    } catch (error) {
        res.status(500).json({message: error});
    }

};

const getSingleTask = async (req, res, next) => {
    try {
        const {id: taskID} = req.params;
        const task = await taskModel.findOne({_id: taskID});

        if (!task) {
            return res.status(404).json({message: `No task with id : ${taskID}`});
        }

        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({message: error});
    }
};

const updateTask = (req, res, next) => {

};

const deleteTask = async (req, res, next) => {
    try {
        const {id: taskID} = req.params;
        const task = await taskModel.findOneAndDelete({_id: taskID});

        if (!task) {
            return res.status(404).json({message: `No task with id : ${taskID}`});
        }

        res.status(200).json({ message: 'Task deleted!' });
    } catch (error) {
        res.status(500).json({message: error});
    }
};
module.exports = {
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTask
};