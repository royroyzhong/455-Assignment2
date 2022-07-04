const recipe = require("./model");
const dbo = require("./conn");

function generateData() {
  console.log("generateData");

  const greenTea = new recipe({
    name: "Green Tea",
    ingredients: "Hot Water, Green Tea Bag",
    instructions: "Put Tea Bag in a cup, and add hot water",
  });

  const BlackTea = new recipe({
    name: "Black Tea",
    ingredients: "Hot Water, Black Tea Bag",
    instructions: "Put Tea Bag in a cup, and add hot water",
  });

  const onsenTamago = new recipe({
    name: "Onsen Tamago",
    ingredients: "Eggs",
    instructions:
      "Boil the egg with cold water, once the water boil, off the fire and wait for 5 mins",
  });
  // Save to db
  greenTea.save();
  BlackTea.save();
  onsenTamago.save();
  // const dbConnect = dbo.getDb();
  // dbConnect.collection("recipe").insertMany([greenTea, BlackTea, onsenTamago]);
}

module.exports = generateData;
