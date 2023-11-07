const express = require("express");
const { authenticateUser } = require("./controller");
const UserTrackingId = require("./model");
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

router.post("/tracking/create", async (req, res) => {
  try {
    let {
      address,
      discount,
      delivery,
      tax,
      total,
      trackingId,
      orderDate,
      estimatedDelivery,
    } = req.body;

    // id = id.trim();
    const newUserTrackingId = new UserTrackingId({
      trackingId: trackingId,
      orderDate: orderDate,
      estimatedDelivery: estimatedDelivery,
      locationOne: {
        location: req.body.locationOne.location,
        isThere: req.body.locationOne.isThere === "true" ? true : false,
        date: req.body.locationOne.date,
      },
      locationTwo: {
        location: req.body.locationTwo.location,
        isThere: req.body.locationTwo.isThere === "true" ? true : false,
        date: req.body.locationTwo.date,
      },
      locationThree: {
        location: req.body.locationThree.location,
        isThere: req.body.locationThree.isThere === "true" ? true : false,
        date: req.body.locationThree.date,
      },
      locationFour: {
        location: req.body.locationFour.location,
        isThere: req.body.locationFour.isThere === "true" ? true : false,
        date: req.body.locationFour.date,
      },
      locationFive: {
        location: req.body.locationFive.location,
        isThere: req.body.locationFive.isThere === "true" ? true : false,
        date: req.body.locationFive.date,
      },
      address: address,
      discount: discount,
      delivery: delivery,
      tax: tax,
      total: total,
    });
    // save user
    const createdUser = await newUserTrackingId.save();
    return res.status(200).json(createdUser);
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
router.post("/tracking/update", async (req, res) => {
  try {
    let {
      address,
      discount,
      delivery,
      tax,
      total,
      trackingId,
      orderDate,
      estimatedDelivery,
    } = req.body;
    const updateUsers = await UserTrackingId.findByIdAndUpdate(
      { _id: req.body._id },
      {
        trackingId: trackingId,
        orderDate: orderDate,
        estimatedDelivery: estimatedDelivery,
        locationOne: {
          location: req.body.locationOne.location,
          isThere: req.body.locationOne.isThere === "true" ? true : false,
          date: req.body.locationOne.date,
        },
        locationTwo: {
          location: req.body.locationTwo.location,
          isThere: req.body.locationTwo.isThere === "true" ? true : false,
          date: req.body.locationTwo.date,
        },
        locationThree: {
          location: req.body.locationThree.location,
          isThere: req.body.locationThree.isThere === "true" ? true : false,
          date: req.body.locationThree.date,
        },
        locationFour: {
          location: req.body.locationFour.location,
          isThere: req.body.locationFour.isThere === "true" ? true : false,
          date: req.body.locationFour.date,
        },
        locationFive: {
          location: req.body.locationFive.location,
          isThere: req.body.locationFive.isThere === "true" ? true : false,
          date: req.body.locationFive.date,
        },
        address: address,
        discount: discount,
        delivery: delivery,
        tax: tax,
        total: total,
      }
    );
    // save user
    const updatedUsers = await updateUsers.save();
    return res.status(200).json(updatedUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.post("/tracking/delete", async (req, res) => {
  try {
    const deleteUsers = await UserTrackingId.findByIdAndDelete({
      _id: req.body._id,
    });
    return res.status(200).json(deleteUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


module.exports = router;
