const express = require("express");
const router = express.Router();

// Import controller functions
const {createShortUrl,redirectShortUrl,} = require("../controllers/shortUrl.controller");

// Define API endpoints
router.post("/api/create", createShortUrl);
router.get("/:shortId", redirectShortUrl);

module.exports = router;