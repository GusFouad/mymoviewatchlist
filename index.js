const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const joi = require("joi");
const cors = require("cors");
const authRoute = require("./routes/auth");
const postTestRoute = require("./routes/postTest");
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Mongodb")
);
//

app.use("/user", authRoute);
app.use("/post", postTestRoute);

// app.use('/movies', movieRoute)
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
