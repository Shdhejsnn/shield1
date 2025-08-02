import React from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Success = ({ onLogout }) => {
  const navigate = useNavigate();
  const orderNumber = 'EB-2024-' + Math.floor(Math.random() * 90000) + 10000;
  const orderDate = new Date().toLocaleDateString();

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE_URL}/api/logout`, { method: 'POST' });
      onLogout(); // This will clear the login state and redirect to login
    } catch (error) {
      console.error('Logout error:', error);
      // Even if API call fails, still logout
      onLogout();
    }
  };

  const handleContinueShopping = () => {
    navigate('/home');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="text-6xl mb-6">✅</div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-gray-600">Order Number</p>
              <p className="font-semibold text-gray-900">{orderNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Order Date</p>
              <p className="font-semibold text-gray-900">{orderDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Payment Method</p>
              <p className="font-semibold text-gray-900">Credit Card</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Status</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              You'll receive an email confirmation shortly
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Your items will be shipped within 2-3 business days
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Track your order using the order number above
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Contact customer support if you have any questions
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleContinueShopping}
            className="btn-primary"
          >
            Continue Shopping
          </button>
          <button
            onClick={handleLogout}
            className="btn-secondary"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success; 