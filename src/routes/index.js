const express = require("express");
const router = express.Router();

const UserTrackingId = require("./../domains/userTrackingId");
const TrackingItems = require("./../domains/trackingItems");

router.use("/user_tracking_Id", UserTrackingId);
router.use("/item_tracking_Id", TrackingItems);

module.exports = router;
