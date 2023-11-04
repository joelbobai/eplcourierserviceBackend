const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  trackingID: String,
  itemName: String,
  itemImg: String,
  itemPrice: String,
  itemQty: String,
  infoOne: String,
  infoTwio: String,
  infoThree: String,
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
