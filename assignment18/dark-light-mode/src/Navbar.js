import React from 'react';
import './App.css';

function Navbar({ darkMode, toggleMode }) {
  return (
    <nav className="navbar">
      <h2>My React App</h2>
      <button onClick={toggleMode}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;
