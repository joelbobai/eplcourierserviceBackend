const express = require("express");
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

module.exports = router;
