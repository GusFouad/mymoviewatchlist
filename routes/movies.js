const moviesRoute = require("express").Router();
const Movie = require("../models/Movie");
const jwt = require("jsonwebtoken");

moviesRoute.route("/mymovies").get((req, res) => {
  Movie.find((err, movies) => {
    if (err) {
      console.log(err);
    } else {
      res.json(movies);
      console.log(movies);
    }
  });
});

moviesRoute.route("/add").post((req, res) => {
  const movies = new Movie(req.body);
  movies.save().then((movies) => {
    res.status(200).json({ movies: "Movie added successfully" });
  });
});

moviesRoute.route("/delete/:id").delete((req, res) => {
  Movie.findByIdAndRemove({ _id: req.params.id }).then(function (movie) {
    res.send(movie);
  });
});

module.exports = moviesRoute;
