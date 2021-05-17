const express = require('express');
require('dotenv').config(); // import .env
const app = express();

// GET test
// http://localhost:PORT/
app.get('/getreq', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from server',
  });
});

// POST
// http://localhost:PORT/
app.post('/postreq', (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server app is running on port ${PORT}`);
});
