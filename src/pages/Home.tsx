import React from 'react';
import { Link } from 'react-router-dom';
import { Store, ShoppingBag, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <div className="relative bg-purple-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80"
            alt="Thrift Store"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Grow Your Thrift Store Online
          </h1>
          <p className="mt-6 max-w-2xl text-xl">
            Join India's largest thrift store marketplace. List your products, reach more customers, and grow your business.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              to="/register"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-gray-50"
            >
              List Your Store
            </Link>
            <Link
              to="/stores"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Browse Stores
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose ThriftBazaar?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to succeed in the thrift store business
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <Store className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Easy Store Setup</h3>
            <p className="mt-2 text-gray-600">
              Create your online store in minutes with our simple setup process
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <ShoppingBag className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Wider Reach</h3>
            <p className="mt-2 text-gray-600">
              Connect with customers across India through our marketplace
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Growth Tools</h3>
            <p className="mt-2 text-gray-600">
              Access analytics and marketing tools to grow your business
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600">
              No hidden fees, just straightforward pricing to help your business grow
            </p>
          </div>

          <div className="mt-16 max-w-lg mx-auto">
            <div className="rounded-2xl bg-white shadow-xl">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">Monthly Subscription</h3>
                <p className="mt-4 text-5xl font-bold text-purple-600">₹2,000</p>
                <p className="mt-4 text-gray-600">Everything you need to sell online</p>
                
                <ul className="mt-8 space-y-4 text-left">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Unlimited product listings</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Store analytics dashboard</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">Customer management tools</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">24/7 support</span>
                  </li>
                </ul>

                <Link
                  to="/register"
                  className="mt-8 block w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;