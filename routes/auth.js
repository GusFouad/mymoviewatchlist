const router = require("express").Router();
const User = require("../models/User");
const Movie = require("../models/Movie");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { loginValidation, registerValidation } = require("../routes/validation");

//

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists!");
  //
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      process.env.TOKEN_SECRET
    );
    res
      .header("auth-token", token)
      .header("access-control-expose-headers", "auth-token")
      .send(_.pick(user, ["_id", "name", "email"]));
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or Password is incorrect");
  //
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Email or Password is incorrect");
  //
  const token = jwt.sign(
    { _id: user._id, name: user.name, email: user.email, movies: user.movies },
    process.env.TOKEN_SECRET
  );
  res
    .header("auth-token", token)
    .header("access-control-expose-headers", "auth-token")
    .send(token);
  res.send("Logged in");
});

//

module.exports = router;
