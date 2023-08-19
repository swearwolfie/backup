const mongoose = require('mongoose');
const { required, valid } = require('../utils/constants');
// const validator = require('validator');
// country, director, duration, year, description, image,
// trailer, nameRU, nameEN и thumbnail, movieId

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, required.country],
  },
  director: {
    type: String,
    required: [true, required.director],
  },
  duration: {
    type: Number,
    required: [true, required.duration],
  },
  year: {
    type: String,
    required: [true, required.year],
  },
  description: {
    type: String,
    required: [true, required.description],
  },
  image: {
    type: String, // ссылка — это строка
    validate: {
      validator(v) {
        return /^(https?:\/\/(www\.)?([a-zA-z0-9-]{1}[a-zA-z0-9-]*\.?)*\.{1}([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:?#[]@!\$&'\(\)\*\+,;=])*)/.test(v);
      },
      message: (props) => `${props.value} ${valid.image}`,
    },
    required: [true, required.image],
  },
  trailer: {
    type: String, // ссылка — это строка
    validate: {
      validator(v) {
        return /^(https?:\/\/(www\.)?([a-zA-z0-9-]{1}[a-zA-z0-9-]*\.?)*\.{1}([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:?#[]@!\$&'\(\)\*\+,;=])*)/.test(v);
      },
      message: (props) => `${props.value} ${valid.trailer}`,
    },
    required: [true, required.trailer],
  },
  nameRU: {
    type: String,
    required: [true, required.name_ru],
  },
  nameEN: {
    type: String,
    required: [true, required.name_en],
  },
  thumbnail: {
    type: String, // ссылка — это строка
    validate: {
      validator(v) {
        return /^(https?:\/\/(www\.)?([a-zA-z0-9-]{1}[a-zA-z0-9-]*\.?)*\.{1}([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:?#[]@!\$&'\(\)\*\+,;=])*)/.test(v);
      },
      message: (props) => `${props.value} ${valid.thumbnail}`,
    },
    required: [true, required.thumbnail],
  },
  movieId: {
    type: Number,
    required: [true, required.movie_id],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, required.owner],
  },
});

module.exports = mongoose.model('movie', movieSchema);
