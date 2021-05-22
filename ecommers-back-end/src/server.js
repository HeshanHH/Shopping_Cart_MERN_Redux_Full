const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config(); // import .env
const app = express();
const connectDB = require('./config/databse');

// Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
// database connection.
connectDB();
// can be use bodyparser also here.
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);

// GET test
// http://localhost:PORT/
app.get('/getreq', (req, res, next) => {
  res.status(200).json({
    message: 'Hello from server',
  });
});

// POST test
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
