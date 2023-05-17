const express = require("express");
const foodModel = require("../models/food");
const userModel = require("../models/user")
const chatModel = require("../models/chat")
const app = express();

app.get("/user", async (request, response) => {
    const users = await userModel.find({});

    try {
        response.send(users);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.post("/user", async (request, response) => {
    const user = new userModel(request.body)
    try {
        await user.save();
        response.send(user);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/chat", async (request, response) => {
    const chat = await chatModel.find({});

    try {
        response.send(chat);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/chat", async (request, response) => {
    const chat = new chatModel({ ...request.body, time: new Date() })
    try {
        await chat.save();
        response.send(chat);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/chat/search", async (request, response) => {
    const chat = await chatModel.find({});
    try {
        var id_from = request.query.idFrom;
        var id_to = request.query.idTo;
        const data = chat.filter((val) => val.id_from == id_from && val.id_to == id_to)
        response.send(data);
    } catch (error) {
        response.status(500).send(error);
    }
});





module.exports = app;