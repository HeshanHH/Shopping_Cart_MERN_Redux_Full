const express = require('express');
const { addCategory, getCategories } = require('../controllers/category');
const { adminMiddleware } = require('../middlewares/adminmiddleware');
const { requireSignin } = require('../middlewares/requiresignin');
const router = express.Router();

// requireSignin and then check for admin adminMiddleware
router.post('/category/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getcategory', getCategories);

module.exports = router;
