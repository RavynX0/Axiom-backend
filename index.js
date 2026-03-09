const express = require('express');
const app = express();
let tasks = [
    {id:1, title: "learn node.js", done: false},
    {id:2, title: "Build to do api", done: true}
];
const port = 3000;

app.listen(port, () => {
    console.log("server running on port 3000");
}) 


app.get ('/tasks', (req, res) => {
    console.log('someone logged /tasks!');
    res.json(tasks);

});