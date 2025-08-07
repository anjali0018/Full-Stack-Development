import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CreatePost from './Pages/CreatePost';
import SinglePost from './Pages/SinglePost';

function App() {
  
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome Post', content: 'This is the first post.' },
  ]);

  // Function to add new post from CreatePost
  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: posts.length + 1 }]);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost onAddPost={addPost} />} />
          <Route path="/post/:id" element={<SinglePost posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
