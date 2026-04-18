const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    question: String,
    answer: String,
});

module.exports = mongoose.model("Card", cardSchema);