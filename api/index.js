const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRouter = require("./routes/user.routes")

dotenv.config();

mongoose
  .connect(process.env.Mongo)
  .then(() => {
    console.log("connected ");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});


app.use("/api/" , userRouter)