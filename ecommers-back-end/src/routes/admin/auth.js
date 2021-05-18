const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const { signup, signin } = require('../../controllers/admin/auth');
// const { requireSignin } = require('../../middlewares/requiresignin');

// POST
// http://localhost:PORT/signup
router.post('/admin/signup', signup);

// POST
// http://localhost:PORT//signin
router.post('/admin/signin', signin);

module.exports = router;
