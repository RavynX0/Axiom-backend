let tasks = [];

const createTask = (req, res) => {
    console.log("POST task controller hit");

    const newTask = req.body;
    tasks.push(newTask);
    res.send({
        message: "Task added successfully",
        task: newTask,
        allTasks: tasks
    });
};

module.exports = {
    createTask
}; 