const router = require('express').Router();
const {
  createUserValid,
  authorizeValid,
} = require('../middlewares/reqValidation');
const { authorize, createUser } = require('../controllers/users');
const { NotFound } = require('../errors/not-found-err');
const auth = require('../middlewares/auth');

router.post('/signup', createUserValid, createUser);

router.post('/signin', authorizeValid, authorize);

// авторизация
// router.use(auth);

router.use('/users', auth, require('./users'));
router.use('/movies', auth, require('./movies'));

router.use('*', auth, (req, res, next) => {
  next(new NotFound('Такой страницы не существует'));
});

module.exports = router;
