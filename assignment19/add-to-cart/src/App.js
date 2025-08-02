import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Carts';
import productsData from './data/products';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      <h1>🛍️ My Shop</h1>
      <div className="container">
        <ProductList products={productsData} onAddToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          totalPrice={totalPrice}
        />
      </div>
    </div>
  );
};

export default App;
