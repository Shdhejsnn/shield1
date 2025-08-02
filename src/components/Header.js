import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ cart, onLogout }) => {
  const location = useLocation();

  return (
    <header className="header-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/home" className="text-2xl font-bold text-ebay-red">
              eBay
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ebay-red focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-ebay-red text-white px-4 py-1 rounded text-sm">
                Search
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/home"
              className={`text-gray-700 hover:text-ebay-red transition-colors ${
                location.pathname === '/home' ? 'text-ebay-red font-semibold' : ''
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/cart"
              className={`text-gray-700 hover:text-ebay-red transition-colors relative ${
                location.pathname === '/cart' ? 'text-ebay-red font-semibold' : ''
              }`}
            >
              Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-ebay-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
            
            <button
              onClick={onLogout}
              className="btn-secondary"
            >
              Sign out
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 