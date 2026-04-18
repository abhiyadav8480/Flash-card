const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// connect DB
 mongoose.connect("mongodb://127.0.0.1:27017/flashcards");

const cardRoutes = require("./cardRoutes");
app.use("/api/cards", cardRoutes);

app.listen(8080, () => console.log("Server running on port 5000"));