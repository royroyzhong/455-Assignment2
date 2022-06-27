var express = require("express");
const item = require("../db/model");
const generateData = require("../db/generate-data");
var router = express.Router();
// let initRecipe =
//   '{"list": [{"name":"Green Tea","ingredients":"Hot Water, Green Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Black Tea","ingredients":"Hot Water, Black Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Hard-Boiled Eggs","ingredients":"Egg, Hot Water","instructions":"Bring a pot of water to boil. Once the water is boiling, use a large slotted spoon to gently lower the eggs into the water. Boil for 11 minutes"},{"name":"Scrambled Eggs","ingredients":"Eggs, water, and a little oil or butter","instructions":"Beat the eggs and whisk until the yolk and whites are thoroughly combined, preheat the pan and brush a small nonstick skillet with olive oil, or melt a little butter inside it. Warm the skillet over medium heat. "},{"name":"Sunny Side Up Eggs","ingredients":"Eggs","instructions":"Crack each egg into an individual bowl or ramekin, Cook them low and slow, Cover the pan"},{"name":"Poached Eggs","ingredients":"Eggs, white wine vinegar","instructions":"Crack an egg into a small bowl or ramekin, bring a medium pot of water to a gentle boil, add a tablespoon of white wine vinegar and stir, simmer"},{"name":"Tamagoyaki","ingredients":"Eggs, Sugar, Mirin, Soy sauce, Salt","instructions":"Beat the eggs, season the whisked eggs with sugar, mirin, soy sauce, and a pinch of salt before pouring a thin layer of the egg mixture into a pan to cook,Wait for the eggs to be cooked and start rolling, repeat until use all the egg "},{"name":"Onsen Tamago","ingredients":"Eggs","instructions":"Boil the egg with cold water, once the water boil, off the fire and wait for 5 mins"}]}';
// let recipe = JSON.parse(initRecipe).list;
const dbo = require("../db/conn");
/* GET users listing. */
router.get("/", function (req, res, next) {
  const dbConnect = dbo.getDb();
  dbConnect
    .collection("recipe")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
  // res.send(recipe);
});

router.post("/", function (req, res, next) {
  if (!req.body) {
    return res.status(400).send({ message: "Cannot Be empty!" });
  }
  if (
    req.body.Name === undefined &&
    req.body.Ingredients === undefined &&
    req.body.Instructions === undefined
  ) {
    return res.status(204);
  }
  const newRecipe = {
    name: req.body.Name,
    instructions: req.body.Ingredients,
    ingredients: req.body.Instructions,
    lastModifieddate: new Date(),
  };
  // const greenTea = new item({
  //   name: "Green Tea",
  //   ingredients: "Hot Water, Green Tea Bag",
  //   instructions: "Put Tea Bag in a cup, and add hot water",
  // });

  // const BlackTea = new item({
  //   name: "Black Tea",
  //   ingredients: "Hot Water, Black Tea Bag",
  //   instructions: "Put Tea Bag in a cup, and add hot water",
  // });

  // const onsenTamago = new item({
  //   name: "Onsen Tamago",
  //   ingredients: "Eggs",
  //   instructions:
  //     "Boil the egg with cold water, once the water boil, off the fire and wait for 5 mins",
  // });
  const dbConnect = dbo.getDb();
  dbConnect.collection("recipe").insertOne(newRecipe, function (err, result) {
    if (err) {
      res.status(400).send("Error inserting matches!");
    } else {
      console.log(`Added a new match with id ${result.insertedId}`);
      res.status(201).send(newRecipe);
    }
  });
});

router.delete("/", function (req, res, next) {
  let name = { name: req.body.recipeName };
  console.log(name);
  const dbConnect = dbo.getDb();
  dbConnect.collection("recipe").deleteOne(name, function (err, result) {
    if (err) {
      res.status(400).send(`Error deleting listing with id ${name}!`);
    }
    dbConnect
      .collection("recipe")
      .find({})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
        } else {
          res.json(result);
        }
      });
  });
});

router.patch("/", function (req, res, next) {
  // console.log("first87");

  if (!req.body) {
    return res.status(400).send({ message: "Cannot Be empty!" });
  }
  const dbConnect = dbo.getDb();
  let name = { name: req.body.recipeName };
  let updateName = {
    $set: { name: req.body.content, lastModifieddate: new Date() },
  };

  dbConnect
    .collection("recipe")
    .updateOne(name, updateName, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log("1 document updated");
      }
    });
  dbConnect
    .collection("recipe")
    .find({})
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});
module.exports = router;
