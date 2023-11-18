const express = require('express');
const app = express();
const port = 3000;

// Dummy database
let tasks = {
    'id1234': { status: 'In Progress' },
    'id5678': { status: 'Completed' }
    // Add more tasks here
};

app.get('/api/task-status/:id', (req, res) => {
    const taskId = req.params.id;
    const task = tasks[taskId];
    if (task) {
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

app.listen(port, () => console.log(`Server running on port ${port}`));