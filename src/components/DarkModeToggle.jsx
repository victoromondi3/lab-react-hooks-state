import React from 'react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode}>
      Toggle Dark Mode: {darkMode ? 'Light' : 'Dark'}
    </button>
  )
}

export default DarkModeToggle
