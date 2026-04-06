let tasks=[];
const express = require('express');
const router = express.Router();


console.log("tasks get router loaded");



//POST create task

router.post('/', (req, res) => {
    console.log("the tasks POST endpoint for post hit");

    const newTask = req.body;//task sent from client
    tasks.push(newTask);

    res.send({
        message: "Task added successfully",
        task: newTask,
        allTasks: tasks
    });
   
});


//GET all tasks

router.get('/', (req, res) => {
    console.log("tasks GET endpoint hit");
    res.send({
        message: "tasks fetched successfully",
        tasks: tasks
    });

});


//PUT modify an existing route
router.put('/:id', (req,res) => {
    const id = req.params.id;
    const updatedData = req.body;

    tasks[id] = updatedData;

    res.send({
        message: "tasks updated successfully",
        task: tasks[id],
        allTasks: tasks
    });
});

//DELETE delete a task
router.delete('/:id', (req,res) => {
    const id = req.params.id;
    const deletedTask = tasks.splice(id, 1);

    res.send({
        message: "Task deleted successfully",
        deletedTask: deletedTask,
        allTasks: tasks

    });
});
module.exports = router;

