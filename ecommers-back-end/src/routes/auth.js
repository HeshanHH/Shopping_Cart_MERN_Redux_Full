const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { signup, signin } = require('../controllers/auth');
const { requireSignin } = require('../middlewares/requiresignin');

// POST
// http://localhost:PORT/signup
router.post('/signup', signup);

// POST
// http://localhost:PORT//signin
router.post('/signin', signin);

// POST
// http://localhost:5001/api/profile
// headers = {
//     Content-Type:application/json
//     Authorization:Bearer token
// }
router.post('/profile', requireSignin, (req, res) => {
  res.status(200).json({
    message: 'User profile',
  });
});
module.exports = router;
