const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.requireSignin = (req, res, next) => {
  // in middlewares we mostly we a pass next() function to call next methode after doing middleware login.
  const token = req.headers.authorization.split(' ')[1];
  console.log(token);
  //console.log(req.headers);
  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.user = user; // this is importtant because we have to pass user to next function.
  next();
};
