const express = require("express");
const router = express.Router();
const Card = require("./cards");

// get all cards
router.get("/", async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
});

// add card
router.post("/", async (req, res) => {
    const { question, answer } = req.body;
    const newCard = new Card({ question, answer });
    await newCard.save();
    res.json(newCard);
});

module.exports = router;