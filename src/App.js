import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import RecipeForm from './components/RecipeForm'
import RecipeInfo from './components/RecipeInfo'
import RecipesHome from './components/RecipesHome'
// import IngredientsHome from './components/ingredients/IngredientsHome'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RecipeForm />}></Route>
          <Route path='/recipes'>
            <Route path='/recipes/:title' element={<RecipesHome />} ></Route>
            <Route path='/recipes/:title/info/:id' element={<RecipeInfo />}></Route>
          </Route>
          {/* <Route path='/ings' element={<IngredientsHome />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App