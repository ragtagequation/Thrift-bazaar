import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Store, ShoppingBag, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Store className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-900">ThriftBazaar</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/stores" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
              <ShoppingBag className="h-5 w-5" />
              <span>Browse Stores</span>
            </Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
                  <User className="h-5 w-5" />
                  <span>{user?.storeName || 'Dashboard'}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                  <Store className="h-5 w-5" />
                  <span>List Your Store</span>
                </Link>
                <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-purple-600">
                  <User className="h-5 w-5" />
                  <span>Login</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;