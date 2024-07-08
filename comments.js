// Create web server
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/comments', (req, res) => {
  res.send('Here are all the comments');
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('Thanks for your comment!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});