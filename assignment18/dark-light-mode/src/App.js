import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
