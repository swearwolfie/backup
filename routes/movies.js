const router = require('express').Router();
const {
  createMovieValid,
  deleteMovieValid,
} = require('../middlewares/reqValidation');
const {
  createMovie,
  getMovies,
  deleteMovie,
} = require('../controllers/movies');
// country, director, duration, year, description, image,
// trailer, nameRU, nameEN и thumbnail, movieId

router.post('/', createMovieValid, createMovie);
router.get('/', getMovies);
router.delete('/:movieId', deleteMovieValid, deleteMovie);

module.exports = router;

/* */

/*
{
  "country": "USA",
  "director": " Joaquim Dos Santos, Kemp Powers and Justin K. Thompson",
  "duration": 140,
  "year": "2023",
  "description": "Miles Morales catapults across the Multiverse",
  "image": "https://www.acrossthespiderverse.movie/images/synopsis_poster.jpg",
  "trailer": "https://www.youtube.com/watch?v=cqGjhVJWtEg",
  "nameRU": "Человек-паук: Паутина вселенных",
  "nameEN": "Spider-Man: Across the Spider-Verse",
  "thumbnail": "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
  "movieId": 7
}
*/
