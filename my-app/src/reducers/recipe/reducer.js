import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATE } from "../utils";
import {
  addRecipeAsync,
  getRecipeAsync,
  removeRecipeAsync,
  searchRecipeAsync,
  editNameAsync,
} from "./thunks";
// let initRecipe =
//   '{"list": [{"name":"Green Tea","ingredients":"Hot Water, Green Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Black Tea","ingredients":"Hot Water, Black Tea Bag","instructions":"Put Tea Bag in a cup, and add hot water"},{"name":"Hard-Boiled Eggs","ingredients":"Egg, Hot Water","instructions":"Bring a pot of water to boil. Once the water is boiling, use a large slotted spoon to gently lower the eggs into the water. Boil for 11 minutes"},{"name":"Scrambled Eggs","ingredients":"Eggs, water, and a little oil or butter","instructions":"Beat the eggs and whisk until the yolk and whites are thoroughly combined, preheat the pan and brush a small nonstick skillet with olive oil, or melt a little butter inside it. Warm the skillet over medium heat. "},{"name":"Sunny Side Up Eggs","ingredients":"Eggs","instructions":"Crack each egg into an individual bowl or ramekin, Cook them low and slow, Cover the pan"},{"name":"Poached Eggs","ingredients":"Eggs, white wine vinegar","instructions":"Crack an egg into a small bowl or ramekin, bring a medium pot of water to a gentle boil, add a tablespoon of white wine vinegar and stir, simmer"},{"name":"Tamagoyaki","ingredients":"Eggs, Sugar, Mirin, Soy sauce, Salt","instructions":"Beat the eggs, season the whisked eggs with sugar, mirin, soy sauce, and a pinch of salt before pouring a thin layer of the egg mixture into a pan to cook,Wait for the eggs to be cooked and start rolling, repeat until use all the egg "},{"name":"Onsen Tamago","ingredients":"Eggs","instructions":"Boil the egg with cold water, once the water boil, off the fire and wait for 5 mins"}]}';
// let obj = JSON.parse(initRecipe).list;
const INITIAL_STATE = {
  list: [],
  getUsers: REQUEST_STATE.IDLE,
  addUser: REQUEST_STATE.IDLE,
  removeUsers: REQUEST_STATE.IDLE,
  searchUsers: REQUEST_STATE.IDLE,
  editName: REQUEST_STATE.IDLE,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: INITIAL_STATE,
  reducers: {
    //actions
    add: (state, action) => {
      console.log(state.recipe);
      let list = JSON.parse(JSON.stringify(state.list));
      let dup = false;
      for (let each of list) {
        if (
          each.name === action.payload.Name &&
          each.ingredients === action.payload.Ingredients &&
          each.instructions === action.payload.Instructions
        ) {
          dup = true;
        }
      }
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
        if (!dup) {
          //   return [...state.list, recipe];
          return { ...state, list: [...state.list, recipe] };
        }
      }
      return state;
    },
    remove: (state, action) => {
      let list = JSON.parse(JSON.stringify(state.list));
      let newList = list.filter((item) => {
        return (
          action.payload.recipeName !== item.name &&
          action.payload.recipeIngredients !== item.ingredients &&
          action.payload.recipeInstructions !== item.instructions
        );
      });
      return { list: newList };
    },
    clearAll: (state, action) => {
      state = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipeAsync.pending, (state) => {
        state.getUsers = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getRecipeAsync.fulfilled, (state, action) => {
        state.getUsers = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getRecipeAsync.rejected, (state, action) => {
        state.getUsers = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addRecipeAsync.pending, (state) => {
        state.addUser = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        state.addUser = REQUEST_STATE.FULFILLED;
        console.log(action);
        state.list.push(action.payload);
      })
      .addCase(addRecipeAsync.rejected, (state, action) => {
        state.addUser = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(removeRecipeAsync.pending, (state) => {
        state.removeUsers = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(removeRecipeAsync.fulfilled, (state, action) => {
        state.removeUsers = REQUEST_STATE.FULFILLED;
        console.log(action.payload);
        state.list = action.payload;
      })
      .addCase(removeRecipeAsync.rejected, (state, action) => {
        state.removeUsers = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(searchRecipeAsync.pending, (state) => {
        state.searchUsers = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(searchRecipeAsync.fulfilled, (state, action) => {
        state.searchUsers = REQUEST_STATE.FULFILLED;
        let inputString = action.meta.arg.toLowerCase();
        if (inputString !== "") {
          state.list = state.list.filter((item, index) => {
            return (
              item.name.toLowerCase().includes(inputString) ||
              item.ingredients.toLowerCase().includes(inputString) ||
              item.instructions.toLowerCase().includes(inputString)
            );
          });
        } else {
          state.list = action.payload;
        }
      })
      .addCase(searchRecipeAsync.rejected, (state, action) => {
        state.searchUsers = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(editNameAsync.pending, (state) => {
        state.editName = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editNameAsync.fulfilled, (state, action) => {
        state.editName = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(editNameAsync.rejected, (state, action) => {
        state.editName = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  },
});

export default recipeSlice.reducer;
