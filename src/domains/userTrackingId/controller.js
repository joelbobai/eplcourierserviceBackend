const UserTrackingId = require("./model");

const authenticateUser = async (data) => {
  try {
    const { id } = data;
    const fetchedUser = await UserTrackingId.findOne({ trackingId: id });
    // console.log("hshdh");
    // const newUserTrackingId = new UserTrackingId({
    //   trackingId: "3354654654526",
    //   orderDate: "Feb 16, 2022",
    //   estimatedDelivery: "May 16, 2022",
    //   locationOne: {
    //     location: "In-Process",
    //     isThere: true,
    //     date: "Wed, 1 lth Jan",
    //   },
    //   locationTwo: {
    //     location: "In-Transit",
    //     isThere: true,
    //     date: "Wed, 1 lth Jan",
    //   },
    //   locationThree: {
    //     location: "Arrived United States",
    //     isThere: true,
    //     date: "Wed, 1 lth Jan",
    //   },
    //   locationFour: {
    //     location: "Delivered",
    //     isThere: false,
    //     date: "Expected by, Mon 16th ",
    //   },
    //   address: "847 Jewess Bridge Apt. \n174 London, UK \n474-769-3919",
    //   discount: "(20%) - $1109.40",
    //   delivery: "$0.00",
    //   tax: "+$221.88",
    //   total: "$321.88",
    // });
    // save user
    // const createdUser = await newUserTrackingId.save();
    // console.log(createdUser + " uuuuu");

    if (!fetchedUser) {
      throw Error("We don't have an account with this Tracking Id");
    }

    return fetchedUser;
  } catch (error) {
    throw error;
  }
};

module.exports = { authenticateUser };
