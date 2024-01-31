const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// In-memory storage for users (replace with a database in production)
const users = [];

app.use(bodyParser.json());

// Create a user
app.post('/users', (req, res) => {
  const userData = req.body;

  if (!userData || !userData.name || !userData.email) {
    return res.status(400).json({ error: 'Invalid user data' });
  }

  const newUser = {
    id: users.length + 1,
    name: userData.name,
    email: userData.email,
  };

  users.push(newUser);

  return res.status(201).json(newUser);
});

// Retrieve a user
app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);

  if (isNaN(userId) || userId <= 0 || userId > users.length) {
    return res.status(404).json({ error: 'User not found' });
  }

  const user = users[userId - 1];

  return res.json(user);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
