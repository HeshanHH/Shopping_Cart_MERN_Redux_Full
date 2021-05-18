const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST test
// http://localhost:PORT//signin
router.post('/signin', (req, res, next) => {});

// POST test
// http://localhost:PORT/signup
router.post('/signup', (req, res, next) => {});

module.exports = router;
