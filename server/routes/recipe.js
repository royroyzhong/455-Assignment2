var express = require("express");
var router = express.Router();
let initRecipe =
  '{"list": [{"name":"Green Tea","ingredients":"Hot Water, Green Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Black Tea","ingredients":"Hot Water, Black Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Hard-Boiled Eggs","ingredients":"Egg, Hot Water","instructions":"Bring a pot of water to boil. Once the water is boiling, use a large slotted spoon to gently lower the eggs into the water. Boil for 11 minutes"},{"name":"Scrambled Eggs","ingredients":"Eggs, water, and a little oil or butter","instructions":"Beat the eggs and whisk until the yolk and whites are thoroughly combined, preheat the pan and brush a small nonstick skillet with olive oil, or melt a little butter inside it. Warm the skillet over medium heat. "},{"name":"Sunny Side Up Eggs","ingredients":"Eggs","instructions":"Crack each egg into an individual bowl or ramekin, Cook them low and slow, Cover the pan"},{"name":"Poached Eggs","ingredients":"Eggs, white wine vinegar","instructions":"Crack an egg into a small bowl or ramekin, bring a medium pot of water to a gentle boil, add a tablespoon of white wine vinegar and stir, simmer"},{"name":"Tamagoyaki","ingredients":"Eggs, Sugar, Mirin, Soy sauce, Salt","instructions":"Beat the eggs, season the whisked eggs with sugar, mirin, soy sauce, and a pinch of salt before pouring a thin layer of the egg mixture into a pan to cook,Wait for the eggs to be cooked and start rolling, repeat until use all the egg "},{"name":"Onsen Tamago","ingredients":"Eggs","instructions":"Boil the egg with cold water, once the water boil, off the fire and wait for 5 mins"}]}';
let recipe = JSON.parse(initRecipe).list;

/* GET users listing. */
router.get("/", function (req, res, next) {
  // console.log(recipe);
  res.send(recipe);
});

router.post("/", function (req, res, next) {
  // console.log(req.body);
  console.log("add");
  console.log(req.body);
  console.log(req.body.name === undefined);
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
  };
  recipe.push(newRecipe);
  return res.send(newRecipe);
});

router.delete("/", function (req, res, next) {
  console.log("123");
  if (!req.body) {
    return res.status(400).send({ message: "Cannot Be empty!" });
  }
  let indexs = req.body.index;
  recipe = recipe.filter((item, index) => {
    return index !== indexs;
  });
  return res.send(recipe);
});
module.exports = router;
