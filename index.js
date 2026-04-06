const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');

const app = express();
app.use(express.json());

app.use('/api', tasksRoutes);

const port = 3000;

app.listen(port, () => {
    console.log("server running on port 3000");
}); 


