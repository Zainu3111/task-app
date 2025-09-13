const express = require('express');
const router = express.Router()

const { createTask, getAllTasks, updateTaskStatus } = require('../controllers/task')

router.route('/').post(createTask).get(getAllTasks)
router.route('/:id/status').patch(updateTaskStatus)

module.exports = router