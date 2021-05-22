// for admin and non admin
const { check, validationResult } = require('express-validator');

exports.validateSignupRequest = [
  check('firstName').notEmpty().withMessage('firstName is required'),
  check('lastName').notEmpty().withMessage('lastName is required'),
  check('lastName'),
  check('email').isEmail().withMessage('Valid Email is required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long'),
];

exports.validateSigninRequest = [
  check('email').isEmail().withMessage('Valid Email is required'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 character long'),
];

exports.isRequestValidated = (req, res, next) => {
  // this is an array
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    //send errors one by one. [0].msg => object
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
