// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#5e3e27' },
    secondary: { main: '#ffffff' },
    error: { main: '#d32f2f' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontFamily: "'Playfair Display', serif",
    },
    h6: {
      fontFamily: "'Playfair Display', serif",
    },
  },
});

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Navigate to="/listproduct" />} />
          <Route
            path="/listproduct"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
