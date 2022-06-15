import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe/reducer";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
  devTools: true,
});
