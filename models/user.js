const mongoose = require('mongoose');
const validator = require('validator');
const { required, valid } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: {
      validator(v) {
        return validator.isLength(v, { min: 2, max: 30 });
      },
      message: (props) => `${props.value} ${valid.name}`,
    },
    required: [true, required.name],
  },
  email: {
    type: String,
    required: [true, required.email],
    unique: true,
    validate: {
      validator(email) {
        return validator.isEmail(email);
      },
      message: (props) => `${props.value} ${valid.email}`,
    },
  },
  password: {
    type: String,
    required: [true, required.password],
    select: false, // чтобы API не возвращал хеш пароля
  },
});

module.exports = mongoose.model('user', userSchema);
