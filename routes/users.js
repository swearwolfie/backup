const router = require('express').Router();
const {
  idValid,
  userPatchValid,
} = require('../middlewares/reqValidation');
const {
  changeUser,
  getCurrentUser,
} = require('../controllers/users');

// запрос пользователя
router.get('/me', idValid, getCurrentUser);

// запрос на редактирование пользователя
router.patch('/me', userPatchValid, changeUser);

module.exports = router;

//
/* {
  "name": "Kate Biship",
  "email": "katiekatie@gmail.com",
  "password": "1234567890"
} */

/*
{
  "name": "Miles Morales",
  "email": "babymiles@gmail.com",
  "password": "1234567890"
}
*/
