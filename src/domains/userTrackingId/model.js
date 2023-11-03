const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  trackingId: String,
  orderDate: String,
  estimatedDelivery: String,
  locationOne: {
    location: String,
    isThere: { type: Boolean, default: false },
    date: String,
  },
  locationTwo: {
    location: String,
    isThere: { type: Boolean, default: false },
    date: String,
  },
  locationThree: {
    location: String,
    isThere: { type: Boolean, default: false },
    date: String,
  },
  locationFour: {
    location: String,
    isThere: { type: Boolean, default: false },
    date: String,
  },
  address: String,
  discount: String,
  delivery: String,
  tax: String,
  total: String,
});

const UserTrackingId = mongoose.model("User", UserSchema);

module.exports = UserTrackingId;
