import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Success from './pages/Success';
import { API_BASE_URL } from './config';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  // Check authentication status on app load
  useEffect(() => {
    // For demo purposes, always start logged out
    setIsLoggedIn(false);
    setCart([]);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/logout`, { method: 'POST' });
      setIsLoggedIn(false);
      setCart([]);
    } catch (error) {
      console.error('Logout error:', error);
      // Even if API call fails, still logout locally
      setIsLoggedIn(false);
      setCart([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoggedIn && <Header cart={cart} onLogout={handleLogout} />}
      <Routes>
        {/* Always redirect to login if not authenticated */}
        <Route 
          path="/" 
          element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/login" 
          element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/home" 
          element={isLoggedIn ? <Home cart={cart} setCart={setCart} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/cart" 
          element={isLoggedIn ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/payment" 
          element={isLoggedIn ? <Payment cart={cart} setCart={setCart} /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/success" 
          element={isLoggedIn ? <Success onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        {/* Catch all other routes and redirect to login */}
        <Route 
          path="*" 
          element={<Navigate to="/login" />} 
        />
      </Routes>
    </div>
  );
}

export default App; 