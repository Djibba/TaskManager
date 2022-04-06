const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTasks,
    getSingleTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController');

router.route('/api/tasks').get(getAllTasks).post(createTasks);
router.route('/api/task/:id').get(getSingleTask).put(updateTask).delete(deleteTask);

module.exports = router;