const express = require("express");
const Item = require("./model");
const { authenticatedTrackingId } = require("./controller");
const router = express.Router();
// ID
router.get("/:trackingId", async (req, res) => {
  try {
    let { trackingId } = req.params || req.body;
    trackingId = trackingId.trim();

    if (!trackingId) {
      throw Error("Empty credentials supplied!");
    }
    const authenticatedItem = await authenticatedTrackingId({ trackingId });

    return res.status(200).json(authenticatedItem);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/_id/:id", async (req, res) => {
  try {
    let { id } = req.params || req.body;
    id = id.trim();

    if (!id) {
      throw Error("Empty credentials supplied!");
    }
    const items = await Item.find({
      _id: id,
    })
      //   .skip((2 - 1) * 100)
      .limit(100);
    // const authenticatedItem = await authenticatedTrackingId({ trackingId });

    return res.status(200).json(items);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/item/get_all", async (req, res) => {
  try {
    const fetchedUsers = await Item.find({});
    return res.status(200).json(fetchedUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.post("/item/create", async (req, res) => {
  try {
    let {
      trackingID,
      itemName,
      itemPrice,
      itemQty,
      infoOne,
      infoTwo,
      infoThree,
    } = req.body;

    // id = id.trim();
    const newUserItem = new Item({
      trackingID: trackingID,
      itemName: itemName,
      itemImg:
        "https://www.ikea.com/gb/en/images/products/tjog-storage-box-with-lid-dark-grey__0921586_pe787908_s5.jpg",
      itemPrice: itemPrice,
      itemQty: itemQty,
      infoOne: infoOne,
      infoTwo: infoTwo,
      infoThree: infoThree,
    });
    // save user
    const createdItem = await newUserItem.save();
    return res.status(200).json(createdItem);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.post("/item/update", async (req, res) => {
  try {
    let {
      trackingID,
      itemName,
      itemPrice,
      itemQty,
      infoOne,
      infoTwo,
      infoThree,
    } = req.body;
    const updateItem = await Item.findByIdAndUpdate(
      { _id: req.body._id },
      {
        trackingID: trackingID,
        itemName: itemName,
        itemImg:
          "https://www.ikea.com/gb/en/images/products/tjog-storage-box-with-lid-dark-grey__0921586_pe787908_s5.jpg",
        itemPrice: itemPrice,
        itemQty: itemQty,
        infoOne: infoOne,
        infoTwo: infoTwo,
        infoThree: infoThree,
      }
    );
    // save user
    const updatedItem = await updateItem.save();
    return res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/item/delete", async (req, res) => {
  try {
    const deleteItem = await Item.findByIdAndDelete({
      _id: req.body._id,
    });
    return res.status(200).json(deleteItem);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
