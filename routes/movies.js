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

module.exports = moviesRoute;
