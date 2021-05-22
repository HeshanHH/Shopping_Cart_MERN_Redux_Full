const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require('../../validators/auth');
const { signup, signin } = require('../../controllers/admin/auth');
// const { requireSignin } = require('../../middlewares/requiresignin');

// POST
// http://localhost:PORT/signup
router.post('/admin/signup', validateSignupRequest, isRequestValidated, signup);

// POST
// http://localhost:PORT//signin
router.post('/admin/signin', validateSigninRequest, isRequestValidated, signin);

module.exports = router;
