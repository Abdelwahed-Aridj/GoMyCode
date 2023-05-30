const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import the User model
const User = require('./models/User');

// Create routes
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.put('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.age = req.body.age;
  user.favoriteFoods = req.body.favoriteFoods;
  await user.save();
  res.json(user);
});

app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ message: 'User deleted' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
