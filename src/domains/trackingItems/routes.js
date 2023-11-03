const express = require("express");
const { authenticatedItems } = require("./controller");
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
    const authenticatedItems = await authenticateUser({ id });

    return res.status(200).json(authenticatedUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
