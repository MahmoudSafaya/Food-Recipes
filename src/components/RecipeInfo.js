import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { recipeInfo, similarRecipes } from '../features/recipes/RecipesSlice';

const RecipeInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipeInfo({ _id: params.id }))
    dispatch(similarRecipes({ _id: params.id }))
  }, [dispatch])

  const recipe = useSelector(state => state.recipes.recipeInformation)

  const { id, title, image, diets, vegan, glutenFree, instructions, readyInMinutes, servings, extendedIngredients } = recipe;
  return (
    <div className='container'>
      {
        <div key={id} className='recipe-info'>
          <div className='info-box'>
            <p>{title}</p>
            <img src={image} alt={title} />
          </div>
          <div className='info-box'>
            <p className='instructions'>{instructions}</p>
            <p className='diets'>
              <h2>Diets</h2>
              <>
                {diets && diets.map((diet, index) => {
                  return (
                    <span key={index}>{diet}</span>
                  )
                })}
              </>
            </p>
            <span>{vegan ? 'Vegan' : 'Not Vegan'}</span>
            <span>{glutenFree ? 'Gluten Free' : ''}</span>
            <br></br>
            <span>Ready In  {readyInMinutes}</span>
            <span>Enough For {servings}</span>
            <div className='ingredients'>
              <h1 className='my-3 text-blue-500'>Ingredients</h1>
              {extendedIngredients && extendedIngredients.map((ingredient, index) => {
                const { original, image, consistency } = ingredient
                return (
                  <div key={index} className='one-ing'>
                    <p>* {original}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default RecipeInfo