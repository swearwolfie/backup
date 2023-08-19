const { celebrate, Joi } = require('celebrate'); // библиотека для валидации данных

const createUserValid = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const authorizeValid = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const idValid = celebrate({
  params: Joi.object().keys({
    _id: Joi.string().alphanum().length(24).hex(),
  }),
});

const userPatchValid = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
  }),
});

const createMovieValid = celebrate({
  body: Joi.object().keys({
    country: Joi.string().min(2).max(30).required(),
    director: Joi.string().min(2).required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().min(2).max(300).required(),
    image: Joi.string().regex(/^(https?:\/\/(www\.)?([a-zA-z0-9-]){1,}\.?([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:/?#[]@!\$&'\(\)\*\+,;=])*)/).required().required(),
    trailer: Joi.string().regex(/^(https?:\/\/(www\.)?([a-zA-z0-9-]){1,}\.?([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:/?#[]@!\$&'\(\)\*\+,;=])*)/).required().required(),
    nameRU: Joi.string().min(2).max(60).required(),
    nameEN: Joi.string().min(2).max(60).required(),
    thumbnail: Joi.string().regex(/^(https?:\/\/(www\.)?([a-zA-z0-9-]){1,}\.?([a-zA-z0-9]){2,8}(\/?([a-zA-z0-9-])*\/?)*\/?([-._~:/?#[]@!\$&'\(\)\*\+,;=])*)/).required().required(),
    movieId: Joi.number().required(),
  }),
});

const deleteMovieValid = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().alphanum().length(24)
      .hex(),
  }),
});

module.exports = {
  createUserValid,
  authorizeValid,
  idValid,
  userPatchValid,
  createMovieValid,
  deleteMovieValid,
};
