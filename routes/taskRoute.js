const express = require('express');
const router = express.Router();
const {
    getAllTasks
} = require('../controllers/taskController');

router.route('/api/tasks').get(getAllTasks);

module.exports = router;