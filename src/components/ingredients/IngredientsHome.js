import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchIngredients } from '../../features/ingredients/IngredientsSlice'

const IngredientsHome = () => {
  const dispatch = useDispatch()
  const ings = useSelector(state => state.ingredients.ingredients);

  useEffect(() => {
    dispatch(searchIngredients())
  }, [dispatch])
  return (
    <div>
      <h1>IngredientsHome</h1>
      <div>
        {
          ings && ings.map(item => {
            return(
              <p key={item.id}>{item.title}</p>
            )
          })
        }
      </div>
    </div>
  )
}

export default IngredientsHome