var express = require("express");
const recipe = require("../db/model");
const generateData = require("../db/generate-data");
var router = express.Router();
// let initRecipe =
//   '{"list": [{"name":"Green Tea","ingredients":"Hot Water, Green Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Black Tea","ingredients":"Hot Water, Black Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Hard-Boiled Eggs","ingredients":"Egg, Hot Water","instructions":"Bring a pot of water to boil. Once the water is boiling, use a large slotted spoon to gently lower the eggs into the water. Boil for 11 minutes"},{"name":"Scrambled Eggs","ingredients":"Eggs, water, and a little oil or butter","instructions":"Beat the eggs and whisk until the yolk and whites are thoroughly combined, preheat the pan and brush a small nonstick skillet with olive oil, or melt a little butter inside it. Warm the skillet over medium heat. "},{"name":"Sunny Side Up Eggs","ingredients":"Eggs","instructions":"Crack each egg into an individual bowl or ramekin, Cook them low and slow, Cover the pan"},{"name":"Poached Eggs","ingredients":"Eggs, white wine vinegar","instructions":"Crack an egg into a small bowl or ramekin, bring a medium pot of water to a gentle boil, add a tablespoon of white wine vinegar and stir, simmer"},{"name":"Tamagoyaki","ingredients":"Eggs, Sugar, Mirin, Soy sauce, Salt","instructions":"Beat the eggs, season the whisked eggs with sugar, mirin, soy sauce, and a pinch of salt before pouring a thin layer of the egg mixture into a pan to cook,Wait for the eggs to be cooked and start rolling, repeat until use all the egg "},{"name":"Onsen Tamago","ingredients":"Eggs","instructions":"Boil the egg with cold water, once the water boil, off the fire and wait for 5 mins"}]}';
// let recipe = JSON.parse(initRecipe).list;
// const dbo = require("../db/conn");
/* GET users listing. */
router.get("/", async function (req, res) {
  // const dbConnect = dbo.getDb();
  // dbConnect
  //   .collection("recipe")
  //   .find({})
  //   .toArray(function (err, result) {
  //     if (err) {
  //       res.status(400).send("Error fetching listings!");
  //     } else {
  //       res.json(result);
  //     }
  //   });
  // res.send(recipe);
  // generateData();
  let data = await recipe.find({});
  // console.log(data);
  res.json(data);
});

router.post("/", async function (req, res) {
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
  let recipeItem = await recipe.create(newRecipe);
  console.log(recipeItem._id);
  res.status(201).send(newRecipe);
});

router.delete("/", async function (req, res, next) {
  console.log(req.body);
  let name = { name: req.body.recipeName };
  let deleteItem = await recipe.findOneAndDelete(name);
  res.send(deleteItem);
});

router.patch("/", async function (req, res, next) {
  if (!req.body) {
    return res.status(400).send({ message: "Cannot Be empty!" });
  }
  let name = { name: req.body.recipeName };
  let updateName = {
    name: req.body.content,
    lastModifieddate: new Date(),
  };
  let doc = await recipe.findOneAndUpdate(name, updateName);
  // console.log(doc);
  res.json(doc);
});

router.patch("/like", async function (req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Cannot Be empty!" });
  }
  let name = { name: req.body.recipeName };
  let doc = await recipe.findOneAndUpdate(name, {
    $inc: { like: 1 },
    lastModifieddate: new Date(),
  });
  res.json(doc);
});
router.patch("/dislike", async function (req, res) {
  if (!req.body) {
    return res.status(400).send({ message: "Cannot Be empty!" });
  }
  let name = { name: req.body.recipeName };
  let doc = await recipe.findOneAndUpdate(name, {
    $inc: { like: -1 },
    lastModifieddate: new Date(),
  });
  res.json(doc);
});
module.exports = router;
