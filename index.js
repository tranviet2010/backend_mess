const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routers/foodRouter");

const app = express();

app.use(express.json());

mongoose.connect(
    'mongodb+srv://lastnight7749:viet1998@test-mongo.umx6d4m.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});