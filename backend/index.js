const express = require('express');
const mongoose = require('mongoose');
const User = require('./user');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const connectDB = async () => {
  try {
await mongoose.connect('mongodb://mongo:27017/myapp');
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
app.post('/submit', (req, res) => {

console.log(req.body);
const { name } = req.body;
User.create({ name }).then(user => {
  res.status(201).json(user);
}).catch(err => {
  res.status(500).json({ error: 'Failed to create user' });
});


});

module.exports = app;