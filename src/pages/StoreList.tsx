import React from 'react';
import { Store, Star, MapPin } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: "Vintage Vibes",
    category: "Vintage Clothing",
    rating: 4.8,
    reviews: 124,
    location: "Mumbai, Maharashtra",
    image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80",
    description: "Curated vintage clothing from the 70s and 80s"
  },
  {
    id: 2,
    name: "Retro Reads",
    category: "Books",
    rating: 4.6,
    reviews: 89,
    location: "Delhi, NCR",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    description: "Rare and second-hand books at affordable prices"
  },
  {
    id: 3,
    name: "Home Treasures",
    category: "Home Decor",
    rating: 4.9,
    reviews: 156,
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80",
    description: "Unique home decor items and vintage furniture"
  }
];

const StoreList = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Discover Thrift Stores</h1>
        <p className="mt-4 text-lg text-gray-600">Find unique items from verified thrift stores across India</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
          <option>All Categories</option>
          <option>Vintage Clothing</option>
          <option>Accessories</option>
          <option>Home Decor</option>
          <option>Books</option>
        </select>

        <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
          <option>All Locations</option>
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Bangalore</option>
          <option>Chennai</option>
        </select>

        <select className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500">
          <option>Sort By: Featured</option>
          <option>Rating: High to Low</option>
          <option>Reviews: Most to Least</option>
        </select>
      </div>

      {/* Store Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stores.map((store) => (
          <div key={store.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-md text-sm font-medium text-gray-900 flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                {store.rating}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{store.name}</h3>
                <span className="text-sm text-purple-600 font-medium">{store.category}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{store.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {store.location}
                </div>
                <span className="text-sm text-gray-500">{store.reviews} reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;