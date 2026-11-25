const express = require("express");
const app = express();
const ShortUrl = require("./src/models/shorturl.model");

const { nanoid } = require("nanoid");
const shortId = nanoid(7);

require("dotenv").config();
const connectDB = require("./src/mongo.config");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/create", async(req, res) => {
    const { url } = req.body;
    const shortId = nanoid(7);
    const newUrl = new ShortUrl({
      originalUrl: url,
      shortId: shortId
    });

    await newUrl.save();

    res.send(shortId);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});