let tasks=[];
const express = require('express');
const router = express.Router();


//import controller
const { createTask, getTasks, deleteTask, updateTask } = require('../controllers/tasks.controller');

console.log("tasks get router loaded");



//POST create task

router.post('/', createTask);

//GET all tasks

router.get('/', getTasks);

//PUT modify an existing route
router.put('/:id', updateTask);

//DELETE delete a task
router.delete('/:id',deleteTask);


module.exports = router;























































