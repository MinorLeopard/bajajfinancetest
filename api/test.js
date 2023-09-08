const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

// Define more routes and middleware as needed.

module.exports = app;
