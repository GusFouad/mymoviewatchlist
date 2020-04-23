const moviesRoute = require("express").Router();
const Movie = require("../models/Movie");
const User = require("../models/User");

const verifyToken = require("./verifyToken");

moviesRoute.get("/list", (req, res) => {
  Movie.find((err, movies) => {
    if (err) {
      console.log(err);
    } else {
      res.json(movies);
      console.log(movies);
    }
  });
});

moviesRoute.post("/add", verifyToken, async (req, res) => {
  const movie = new Movie(req.body);

  const user = await User.findById(req.user._id);
  user.movies.push(new Movie(req.body));
  await user.save();

  res.status(200).send(req.user.movie)
});

moviesRoute.route("/add").post(verifyToken, (req, res) => {
  console.log(req.user);
  const movie = new Movie(req.body);
  movie.save().then((movie) => {
    res.status(200).json({ movies: "Movie added successfully" });
  });
});

moviesRoute.route("/delete/:id").delete((req, res) => {
  Movie.findByIdAndRemove({ _id: req.params.id }).then(function (movie) {
    res.send(movie);
  });
});

module.exports = moviesRoute;
