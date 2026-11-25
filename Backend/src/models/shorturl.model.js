const mongoose = require("mongoose");

const shortUrlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true
    },
    shortId: {
      type: String,
      required: true,
      index: true,
      unique: true, 
    },
    clicks: {
      type: Number,
      required: true,
      
      default: 0
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true``
    }
  },                                                       //schema
  { timestamps: true }
);

module.exports = mongoose.model("ShortUrl", shortUrlSchema);            //model