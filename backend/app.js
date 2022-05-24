const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

MONGODB_URL = "mongodb+srv://shir:shir@cluster0.n59qt.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      //this is the actuall creation
      const UsersModel = users(mongoose);
      console.log("Successfully Connected in MongoDB");
    } else {
      console.log("Syntax Error: " + err);
    }
  }
);

const users = require("./models/user");

const usersRouter = require("./routes/users");
;
app.use("/users", usersRouter);

// Firing up the app on selected port
app.listen(port, () => {
  console.log("Example app listening on port " + port);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});


app.on("error", (error) => {
  throw new Error(`[app]::ERROR:${error.message}`);
});
