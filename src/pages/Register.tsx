import React, { useState } from 'react';
import { Store } from 'lucide-react';

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <Store className="h-12 w-12 text-purple-600 mx-auto" />
        <h2 className="mt-4 text-3xl font-bold text-gray-900">List Your Thrift Store</h2>
        <p className="mt-2 text-gray-600">Join our marketplace and reach customers across India</p>
      </div>

      <div className="bg-white shadow rounded-lg">
        {/* Progress Steps */}
        <div className="px-8 pt-8">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="mt-2 text-sm">Store Details</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="mt-2 text-sm">Contact Info</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-purple-600 text-white' : 'bg-gray-200'
              }`}>
                3
              </div>
              <span className="mt-2 text-sm">Payment</span>
            </div>
          </div>
        </div>

        {/* Form Steps */}
        <div className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Store Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Store Description
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Store Category
                </label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                >
                  <option>Vintage Clothing</option>
                  <option>Accessories</option>
                  <option>Home Decor</option>
                  <option>Books</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contact Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Store Address
                </label>
                <textarea
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">Subscription Details</h3>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <span>Monthly Fee</span>
                    <span className="font-medium">₹2,000</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>GST (18%)</span>
                    <span className="font-medium">₹360</span>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t">
                    <span className="font-medium">Total Amount</span>
                    <span className="font-medium">₹2,360</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Previous
              </button>
            )}
            <button
              onClick={() => step < 3 ? setStep(step + 1) : null}
              className="ml-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
            >
              {step === 3 ? 'Complete Registration' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;