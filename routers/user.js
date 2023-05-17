const express = require("express");
const foodModel = require("../models/food");
const app = express();

app.get("/user", async (request, response) => {
  const users = await foodModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = app;