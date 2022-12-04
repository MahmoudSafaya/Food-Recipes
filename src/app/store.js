import { configureStore } from "@reduxjs/toolkit";
import RecipesSlice from "../features/recipes/RecipesSlice";
import IngredientsSlice from "../features/ingredients/IngredientsSlice";

export const store = configureStore({
  reducer:{
    recipes: RecipesSlice,
    ingredients: IngredientsSlice
  }
})