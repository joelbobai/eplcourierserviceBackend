const Item = require("./model");

const authenticatedTrackingId = async (data) => {
  try {
    const { trackingId } = data;
    const items = await Item.find({
      trackingID: trackingId,
    })
      //   .skip((2 - 1) * 100)
      .limit(100);

    // const newItem = new Item({
    //   trackingID: "9925772888",
    //   itemName: "MackBook Pro 14",
    //   itemImg:
    //     "https://s3-alpha-sig.figma.com/img/4c3e/1906/8e64838fa5ed0c02080e10a3cced5edd?Expires=1699833600&Signature=cbW4sPtLXLhpUnZto1pCmkAQ~fusUyJ7JTqNDVwEAsuq~dzRJO1u~iU6sm8urx0~WiFwijpdH5NOgF4Bw5hspQiWgOYJYclt8N6GpG6GUvI24VXPMrr~Eo7wLgHZ0tn~acDoTw~iYZY36wT7ejaYubN5HXTXpvOP6xkrwkP0Se4lQSc9F1EEy7OE8etE6930R9ykhS35ltKHj7bddni4nsiTa4cyUVKX1nTVXExz67VJ1Kwxb6cqTMxqCnMZ-8xDscKcNvKD-Qok1Dzu50NycJ6TudwJYyKhPzRnE5OI8RGqj3ZNVbGU42s6VuwNzv32D68EWSiN~Lu~tdsEFZOBxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    //   itemPrice: "$2599.00",
    //   itemQty: "1",
    //   infoOne: "Space Gray",
    //   infoTwio: "32GB",
    //   infoThree: "1 TB",
    // });
    // save user
    // const createdItem = await newItem.save();
    // console.log(createdItem + " uuuuu");

    if (!items[0]) {
      console.log("Item with the provided ID do not exists");
      throw Error("Item with the provided ID do not exists");
    }

    return items;
  } catch (error) {
    throw error;
  }
};

module.exports = { authenticatedTrackingId };
