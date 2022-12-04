import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { complexSearch } from '../features/recipes/RecipesSlice';

const RecipesHome = () => {
  const dispatch = useDispatch()
  const params = useParams();
  const title = params.title;

  useEffect(() => {
    dispatch(complexSearch({ title }))
  }, [dispatch])

  const recipes = useSelector(state => state.recipes.recipes);

  return (
    <div>
      <h1 className='text-center text-red-500 font-bold my-10'>Recipes</h1>

      <section className='recipes-home'>
        {
          recipes && recipes.map(item => {
            const { id, title, image } = item;
            return (
              <div key={id} className='recipe-home-info'>
                <Link to={`info/${id}`}>
                  <div className='img-contain'>
                    <img src={image} alt={title} />
                  </div>
                  <p>{title}</p>
                </Link>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}

export default RecipesHome