const express = require("express");
const router = express.Router();

const UserTrackingId = require("./../domains/userTrackingId");

router.use("/user_tracking_Id", UserTrackingId);

module.exports = router;
