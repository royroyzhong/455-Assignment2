import { createAsyncThunk } from "@reduxjs/toolkit";
import { actionTypes } from "./actionTypes";
import UserService from "./service";

export const getRecipeAsync = createAsyncThunk(
  actionTypes.GET_RECIPE,
  async () => {
    return await UserService.getRecipe();
  }
);

export const addRecipeAsync = createAsyncThunk(
  actionTypes.ADD_RECIPE,
  async (name) => {
    return await UserService.addRecipe(name);
  }
);
export const searchRecipeAsync = createAsyncThunk(
  actionTypes.SEARCH_RECIPE,
  async (input) => {
    return await UserService.searchRecipe({ input });
  }
);
export const removeRecipeAsync = createAsyncThunk(
  actionTypes.REMOVE_RECIPE,
  async (index) => {
    return await UserService.removeRecipe(index);
  }
);

export const editNameAsync = createAsyncThunk(
  actionTypes.Edit_Name,
  async (index) => {
    console.log("34");
    return await UserService.editName(index);
  }
);
