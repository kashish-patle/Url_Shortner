const mongoose = require("mongoose");

// Define the schema for shortened URLs
const shortUrlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true,
    },
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    clicks: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

// Create and export the ShortUrl model
module.exports = mongoose.model("ShortUrl", shortUrlSchema);