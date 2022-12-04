import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { autoCompleteRecipe } from '../features/recipes/RecipesSlice';

const RecipeForm = () => {
  const dispatch = useDispatch()
  const [output, setOutput] = useState(false);

  const getRecipe = (e) => {
    dispatch(autoCompleteRecipe({ title: e.target.value }))
    if (e.target.value) {
      setOutput(true)
    }
  }

  const recipes = useSelector(state => state.recipes.autoComplete);

  return (
    <div className='recipe-form'>
      <h1 className='text-center'>Search For A Recipe</h1>
      <form>
        <input
          type='text'
          name='recipe'
          id='recipe'
          placeholder='search for a recipe'
          autoComplete='off'
          className='w-full py-2 px-3 font-medium border-none outline-none shadow-md'
          onChange={(e) => getRecipe(e)}
        />
      </form>
      {
        output ? <section className='recipe-form-output px-3'>
          <div>
            {
              recipes && recipes.map(item => {
                const { id, title } = item;
                return (
                  <p key={id}>
                    <Link to={`recipes/${title}`}>{title}</Link>
                  </p>
                )
              })
            }
          </div>
        </section> : ''
      }
    </div>
  )
}

export default RecipeForm