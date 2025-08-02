import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../config';

const Home = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId })
      });

      const data = await response.json();

      if (data.success) {
        setCart(data.cart);
        showNotification('Item added to cart!');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const showNotification = (message) => {
    // Simple notification - in a real app you'd use a proper notification system
    alert(message);
  };

  const handleImageError = (e) => {
    // Fallback to a colored background with product name
    e.target.style.display = 'none';
    const fallback = e.target.nextSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ebay-red mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600">Discover amazing deals on electronics, fashion, and more</p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="relative aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
                onError={handleImageError}
              />
              {/* Fallback div for when image fails to load */}
              <div 
                className="hidden w-full h-48 flex items-center justify-center text-white font-semibold text-center px-4"
                style={{
                  background: `linear-gradient(135deg, ${getProductColor(product.id)})`
                }}
              >
                {product.title}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-ebay-red">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(product.id)}
                  className="btn-primary text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products available at the moment.</p>
        </div>
      )}
    </div>
  );
};

// Helper function to get different colors for different products
const getProductColor = (productId) => {
  const colors = [
    '#007AFF, #0056CC', // Blue - iPhone
    '#1428A0, #0F1F6B', // Dark Blue - Samsung
    '#000000, #333333', // Black - MacBook
    '#8B5CF6, #6D28D9', // Purple - Headphones
    '#DC0F62, #BE185D', // Pink - Nintendo
    '#059669, #047857', // Green - AirPods
    '#F59E0B, #D97706', // Orange - iPad
    '#EF4444, #DC2626', // Red - TV
    '#10B981, #059669', // Emerald - Drone
    '#3B82F6, #2563EB', // Blue - GoPro
    '#8B5CF6, #7C3AED', // Purple - Apple Watch
    '#F97316, #EA580C'  // Orange - PlayStation
  ];
  return colors[(productId - 1) % colors.length];
};

export default Home; 