// LoginSignup.js
import React, { useState } from 'react';
import './LoginSignup.css';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      
      <form>
        {!isLogin && (
          <input type="text" placeholder="Username" required />
        )}

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default LoginSignup;
