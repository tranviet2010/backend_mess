const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    currentDate: {
        createtime: true,
        upsert: true,
    },
    id_from: {
        type: String
    },
    id_to: {
        type: String
    },
    mess: {
        type: String
    }
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;