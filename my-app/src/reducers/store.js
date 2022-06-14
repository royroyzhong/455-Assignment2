import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./users/reducer";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
  devTools: true,
});
