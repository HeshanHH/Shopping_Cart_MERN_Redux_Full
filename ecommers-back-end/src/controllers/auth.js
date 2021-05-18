const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// http://localhost:5001/api/signup
// {
//   "firstName" :"Heshan2" ,
//   "lastName" :"Heshan2" ,
//   "email" :"testemail2@gmail.com",
//   "password" : "1234562"
// }

exports.signup = (req, res) => {
  var filter = {
    email: req.body.email,
  };
  if (filter) {
    User.findOne({ ...filter }).exec((error, user) => {
      if (user) {
        return res.status(400).json({
          message: 'User alredy registerd',
        });
      }

      const { firstName, lastName, email, password } = req.body;
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        username: Math.random().toString(), // just for the development
      });

      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: 'User alredy registerd',
          });
        }
        if (data) {
          return res.status(201).json({
            message: 'signup successfull',
            //user: data,
          });
        }
      });
    });
  }
};

// http://localhost:5001/api/signin
// {
//   "email" :"testemail2@gmail.com",
//   "password" : "1234562"
// }

exports.signin = (req, res) => {
  var filter = {
    email: req.body.email,
  };
  if (filter) {
    User.findOne({ ...filter }).exec((error, user) => {
      if (error) {
        return res.status(400).json({
          message: 'user not found',
          error: error.message,
        });
      }
      if (user) {
        if (user.authenticate(req.body.password)) {
          // if user found then we send token to front end.
          // payload , secret-key ,expirein
          const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
          const { _id, firstName, lastName, email, role, fullName } = user;
          res.status(200).json({
            token,
            user: {
              _id,
              firstName,
              lastName,
              email,
              role,
              fullName,
            },
          });
        } else {
          return res.status(400).json({
            message: 'Invalide credential',
          });
        }
      } else {
        return res.status(400).json({
          message: 'something went wrong',
        });
      }
    });
  }
};
