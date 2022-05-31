let initRecipe =
  '{"list": [{"name":"Green Tea","ingredients":"Hot Water, Green Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Black Tea","ingredients":"Hot Water, Black Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Hard-Boiled Eggs","ingredients":"Egg, Hot Water","instructions":"Bring a pot of water to boil. Once the water is boiling, use a large slotted spoon to gently lower the eggs into the water. Boil for 11 minutes"},{"name":"Scrambled Eggs","ingredients":"Eggs, water, and a little oil or butter","instructions":"Beat the eggs and whisk until the yolk and whites are thoroughly combined, preheat the pan and brush a small nonstick skillet with olive oil, or melt a little butter inside it. Warm the skillet over medium heat. "},{"name":"Sunny Side Up Eggs","ingredients":"Eggs","instructions":"Crack each egg into an individual bowl or ramekin, Cook them low and slow, Cover the pan"},{"name":"Poached Eggs","ingredients":"Eggs, white wine vinegar","instructions":"Crack an egg into a small bowl or ramekin, bring a medium pot of water to a gentle boil, add a tablespoon of white wine vinegar and stir, simmer"},{"name":"Tamagoyaki","ingredients":"Eggs, Sugar, Mirin, Soy sauce, Salt","instructions":"Beat the eggs, season the whisked eggs with sugar, mirin, soy sauce, and a pinch of salt before pouring a thin layer of the egg mixture into a pan to cook,Wait for the eggs to be cooked and start rolling, repeat until use all the egg "},{"name":"Onsen Tamago","ingredients":"Eggs","instructions":"Boil the egg with cold water, once the water boil, off the fire and wait for 5 mins"}]}';
let obj = JSON.parse(initRecipe).list;
const recipeList = (lists = obj, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      if (
        action.payload.Name != null &&
        action.payload.Ingredients != null &&
        action.payload.Instructions != null
      ) {
        let recipe = {
          name: action.payload.Name,
          ingredients: action.payload.Ingredients,
          instructions: action.payload.Instructions,
        };
        return [...lists, recipe];
      }
      return lists;
    case "REMOVE_COUNTER":
      return lists.filter((item) => {
        return (
          action.payload.recipeName !== item.name &&
          action.payload.recipeIngredients !== item.ingredients &&
          action.payload.recipeInstructions !== item.instructions
        );
      });
    case "CLEARALL_COUNTER":
      lists = action.payload;
      return lists;
    default:
      return lists;
  }
};
export default recipeList;
