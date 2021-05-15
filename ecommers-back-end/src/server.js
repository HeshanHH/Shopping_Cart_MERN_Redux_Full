const express = require('express');
require('dotenv').config(); // import .env
const app = express();

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server app is running on port ${PORT}`);
});
