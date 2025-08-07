
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ marginRight: '10px', color: '#fff' }}>Home</Link>
      <Link to="/login" style={{ marginRight: '10px', color: '#fff' }}>Login</Link>
      <Link to="/register" style={{ marginRight: '10px', color: '#fff' }}>Register</Link>
      <Link to="/create" style={{ color: '#fff' }}>Create Post</Link>
    </nav>
  );
};

export default Navbar;
