import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : '#fff',
        color: darkMode ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '20px'
      }}
    >
      <h1>🛒 Shopping App</h1>
      <p>Welcome to the Shopping App!</p>

      <DarkModeToggle
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <br />
      <br />

      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      <Cart cart={cart} />
    </div>
  )
}

export default App
      
