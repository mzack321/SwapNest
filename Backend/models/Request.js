

const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(
  {
    senderId: String,
    receiveId: String,
    productId: String,
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Request", requestSchema);