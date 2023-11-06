const express = require("express");
const { authenticateUser } = require("./controller");
const router = express.Router();
// ID
router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params || req.body;
    console.log(id);
    id = id.trim();

    if (!id) {
      throw Error("Empty credentials supplied!");
    }
    const authenticatedUser = await authenticateUser({ id });

    return res.status(200).json(authenticatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});



router.get("/tracking/get_all", async (req, res) => {
  try {
    const fetchedUsers = await UserTrackingId.find({});
    return res.status(200).json(fetchedUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;
