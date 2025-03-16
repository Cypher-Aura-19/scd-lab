const express = require('express');
const bodyParser = require('body-parser');
const { createEvent, getUpcomingEvents } = require('./events');
const { registerUser, authenticateUser } = require('./auth');

const app = express();
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    registerUser(username, password) ? res.send('User registered!') : res.status(400).send('User already exists!');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    authenticateUser(username, password) ? res.send('Login successful!') : res.status(401).send('Invalid credentials');
});

app.post('/events', (req, res) => {
    const { name, description, date, time, category, reminder } = req.body;
    const event = createEvent(name, description, date, time, category, reminder);
    res.json(event);
});

app.get('/events', (req, res) => {
    res.json(getUpcomingEvents(req.query));
});

app.listen(3000, () => console.log('Server running on port 3000'));
