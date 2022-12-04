import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: 'idle', // | 'pending' | 'succeeded' | 'failed'
  recipes: [],
  recipeInformation: {},
  similarRec: [],
  autoComplete: []
}

const api = 'https://api.spoonacular.com/recipes/';
const apiKey = '?apiKey=ecd5d7dd599e4a7ebe88bc71dd3397b4';


export const complexSearch = createAsyncThunk('recipes/complexSearch', async (recipe, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const result = await fetch(`${api}complexSearch${apiKey}&${new URLSearchParams({
      query: recipe.title,
      number: 10
    })}`)
    .then((res) => res.json())
    .then((data) => data);
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const autoCompleteRecipe = createAsyncThunk('recipes/autocomplete', async (recipe, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const result = await fetch(`${api}autocomplete${apiKey}&${new URLSearchParams({
      query: recipe.title,
      number: 10
    })}`)
    .then((res) => res.json())
    .then((data) => data);
    return result;
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const recipeInfo = createAsyncThunk('recipes/recipeInfo', async (recipe, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const result = await fetch(`${api}/${recipe._id}/information${apiKey}`)
      .then(res => res.json())
      .then(data => data);
    return result
  } catch (error) {
    return rejectWithValue(error)
  }
})

export const similarRecipes = createAsyncThunk('recipes/similarRecipes', async (recipe, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const result = await fetch(`${api}/${recipe._id}/similar${apiKey}`)
      .then(res => res.json())
      .then(data => data);
    return result
  } catch (error) {
    return rejectWithValue(error)
  }
})


const RecipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(complexSearch.pending, (state, action) => {
        state.loading = 'loading'
        console.log('pending')
      })
      .addCase(complexSearch.fulfilled, (state, action) => {
        state.recipes = action.payload.results
        state.loading = 'succeeded'
        console.log('success')
      })
      .addCase(complexSearch.rejected, (state, action) => {
        state.loading = 'failed'
      })
      .addCase(recipeInfo.fulfilled, (state, action) => {
        state.recipeInformation = action.payload
      })
      .addCase(similarRecipes.fulfilled, (state, action) => {
        state.similarRec = action.payload
      })
      .addCase(autoCompleteRecipe.fulfilled, (state, action) => {
        state.autoComplete = action.payload
      })
      
  }
})


export default RecipesSlice.reducer
