import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Cart = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart`);
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId })
      });

      const data = await response.json();

      if (data.success) {
        setCartItems(data.cart);
        setCart(data.cart);
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 5.99 : 0;
    return { subtotal, shipping, total: subtotal + shipping };
  };

  const handleImageError = (e) => {
    // Fallback to a colored background with product name
    e.target.style.display = 'none';
    const fallback = e.target.nextSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

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

  const { subtotal, shipping, total } = calculateTotal();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ebay-red mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
        <p className="text-gray-600">
          {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🛒</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
          <p className="text-gray-600 mb-6">Add some items to get started!</p>
          <button
            onClick={() => navigate('/home')}
            className="btn-primary"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                  <div className="flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                      onError={handleImageError}
                    />
                    {/* Fallback for cart item images */}
                    <div 
                      className="hidden w-20 h-20 rounded flex items-center justify-center text-white text-xs font-semibold text-center"
                      style={{
                        background: `linear-gradient(135deg, ${getProductColor(item.id)})`
                      }}
                    >
                      {item.title.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      Qty: {item.quantity}
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-lg font-bold text-ebay-red">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-red-600 hover:text-red-800 mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-ebay-red">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/payment')}
                className="w-full btn-primary mb-3"
              >
                Proceed to Payment
              </button>
              
              <button
                onClick={() => navigate('/home')}
                className="w-full btn-secondary"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 