require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const bodyParser = require("body-parser");

const userRouter = require("./routes/user.route");

app.use(cors());

app.use(
  cors({
    origin: "*",
  })
);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connection Successfully");
  })
  .catch((e) => {
    console.log("Database Error", e);
  });
app.use(express.json());
app.use(bodyParser.json());
app.use("/", userRouter);
app.listen(PORT, () => {
  console.log(`Application is running on post ${PORT}`);
});

