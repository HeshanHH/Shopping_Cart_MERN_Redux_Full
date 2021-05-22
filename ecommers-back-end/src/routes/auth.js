const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const User = require('../models/User');
const { signup, signin } = require('../controllers/auth');
const { requireSignin } = require('../middlewares/requiresignin');
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require('../validators/auth');
// # express-validator

// - https://express-validator.github.io/docs/
// - https://express-validator.github.io/docs/custom-error-messages.html

// POST
// http://localhost:PORT/signup
// router.post(
//   '/signup',
//   [
//     check('firstName').notEmpty().withMessage('First name is required'),
//     check('lasttName').notEmpty().withMessage('Last name is required'),
//     check('email').isEmail().withMessage('Valid email is required'),
//     check('password')
//       .isLength({ min: 6 })
//       .withMessage('Password must be at least 6 charactor long'),
//   ],
//   signup
// );

router.post('/signup', validateSignupRequest, isRequestValidated, signup);

// POST
// http://localhost:PORT//signin
router.post('/signin', validateSigninRequest, isRequestValidated, signin);

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
