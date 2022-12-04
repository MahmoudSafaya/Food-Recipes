import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
  loading: 'idle'
}

const api = 'https://api.spoonacular.com/food/ingredients/search';
const apiKey = '?apiKey=ecd5d7dd599e4a7ebe88bc71dd3397b4';

export const searchIngredients = createAsyncThunk('ingredients/getIngredients', async (_, thunkAPI) => {
  const {rejectWithValue} = thunkAPI;
  try {
    const fetchedData = await fetch(`${api}${apiKey}`)
      .then(res => res.json())
      .then(data => data)
    return fetchedData
  } catch (error) {
    return rejectWithValue(error)
  }
})

const IngredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(searchIngredients.pending, (state, action) => {
      console.log('pending')
    })
      .addCase(searchIngredients.fulfilled, (state, action) => {
        console.log('success')
        console.log(action.payload)
      })
  }
})

export default IngredientsSlice.reducer