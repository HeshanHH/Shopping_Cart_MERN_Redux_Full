const express = require('express');
require('dotenv').config(); // import .env
const app = express();

// http://localhost:PORT/
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from server',
  });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server app is running on port ${PORT}`);
});
