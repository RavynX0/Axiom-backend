let tasks = [];
//POST controller
const createTask = (req, res) => {
    console.log("POST task controller hit");

    const newTask = {
        id: Date.now(),//unique id
        ...req.body
    };
    tasks.push(newTask);
    res.send({
        message: "Task added successfully",
        task: newTask,
        allTasks: tasks
    });
};

//GET controller

const getTasks = (req, res) => {
    console.log("GET tasks controller hit");

    res.send({
        message: "All tasks retrieved",
        tasks: tasks
    });
};

//DELETE controller

const deleteTask = (req, res) =>{
    const id = Number(req.params.id);

    console.log("Delete task controller hit");

    tasks = tasks.filter(task => task.id !== id);

    res.send({
        message: "Task deleted successfully",
        allTasks: tasks
    });
};


//UPDATE controllers )(put request)
const updateTask = (req, res) => {
    const id = Number(req.params.id);

    console.log("UPDATE task controller hit");

    tasks = tasks.map(task => {
        if (task.id === id){
            return {
                ...task,
                ...req.body
            };
        }

        return task;
    });

    res.json({
        message: "Task updated successfully",
        allTasks: tasks
    });

};
module.exports = {
    createTask,
    getTasks,
    deleteTask,
    updateTask

}; 