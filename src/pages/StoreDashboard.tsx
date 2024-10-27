import React from 'react';
import { Store, Package, Users, TrendingUp, DollarSign, ShoppingCart, BarChart2 } from 'lucide-react';

const StoreDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Store Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vintage Vibes</h1>
          <p className="text-gray-600">Dashboard Overview</p>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Add New Product
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">₹45,675</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">+12% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <ShoppingCart className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">+8% from last month</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Products</p>
              <p className="text-2xl font-bold text-gray-900">48</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Package className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-2">4 out of stock</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Customers</p>
              <p className="text-2xl font-bold text-gray-900">1,204</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-green-600 text-sm mt-2">+15% new customers</p>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Order ID</th>
                <th className="text-left py-3 px-4">Customer</th>
                <th className="text-left py-3 px-4">Products</th>
                <th className="text-left py-3 px-4">Total</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">#ORD-001</td>
                <td className="py-3 px-4">Priya Sharma</td>
                <td className="py-3 px-4">Vintage Denim Jacket</td>
                <td className="py-3 px-4">₹2,500</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                    Delivered
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">#ORD-002</td>
                <td className="py-3 px-4">Rahul Verma</td>
                <td className="py-3 px-4">Retro Sunglasses</td>
                <td className="py-3 px-4">₹1,200</td>
                <td className="py-3 px-4">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                    Processing
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Performance Overview</h2>
          <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
        <div className="h-64 flex items-center justify-center text-gray-500">
          <BarChart2 className="h-8 w-8 mr-2" />
          <span>Chart visualization would go here</span>
        </div>
      </div>
    </div>
  );
};

export default StoreDashboard;