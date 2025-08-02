import React from 'react';
import './App.css';

function Content() {
  return (
    <main className="content">
      <h1>Welcome to the React Dark/Light Mode App</h1>
      <p>
        This is a simple React app that demonstrates how to switch between dark and light themes using useState.
        Dark mode is easier on the eyes in low-light environments, while light mode is better in bright conditions.
      </p>
      <p>
        Toggle the button on the top right corner to switch themes. This feature is commonly used in modern websites and apps to enhance user experience.
      </p>
    </main>
  );
}

export default Content;
