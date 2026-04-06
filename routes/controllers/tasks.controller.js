let tasks = [];

const getTasks = (req, res) => {
    res.json(tasks);
};

const createTasks = (req, res) => {
    console.log("POST /tasks route is running");

    const { title } = req.body;

    if (!title || title.trim === "") {
        
    }



    


};