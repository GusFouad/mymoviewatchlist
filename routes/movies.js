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
