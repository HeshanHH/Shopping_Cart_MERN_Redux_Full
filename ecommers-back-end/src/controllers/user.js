const User = require('../models/User');

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
