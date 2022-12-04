import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <h2>Logo</h2>
        <ul className='list-style-none flex nav-ul'>
          <li>Recipes</li>
          <li>Ingredients</li>
          <li>Products</li>
          <li>Meals</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header