const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'super-admin'],
      default: 'user',
    },
    contactNumber: { type: String },
    pofilePicture: { type: String },
  },
  // using this object will add timestamps.
  { timestamps: true }
);

// virusal field cant create directly on MongoDB.
// but using mongoose we can create virtual fields.

// ## Technique 1 from DOC (generate a salt and hash on separate function calls):
// const salt = bcrypt.genSaltSync(saltRounds);
// const hash = bcrypt.hashSync(myPlaintextPassword, salt);

// Store hash in your password DB
userSchema.virtual('password').set(function (password) {
  // password - usergiven password.
  // 10 - salt range
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// ##To check a password:
// Load hash from your password DB.
// bcrypt.compareSync(myPlaintextPassword, hash); // true
// bcrypt.compareSync(someOtherPlaintextPassword, hash); // false

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.hash_password);
  },
};

module.exports = mongoose.model('User', userSchema);
