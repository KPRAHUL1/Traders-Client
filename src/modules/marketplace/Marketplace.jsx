import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.js'

const categories = [
  { id: 1, name: 'Bricks', icon: '🧱' },
  { id: 2, name: 'Sand', icon: '🏖️' },
  { id: 3, name: 'Wood', icon: '🪵' },
  { id: 4, name: 'Cement', icon: '🏗️' },
  { id: 5, name: 'Steel', icon: '🔩' },
  { id: 6, name: 'Tiles', icon: '🔲' },
]

const chambers = [
  {
    id: 1,
    name: 'Premium Brick Chamber',
    location: 'Chennai, Tamil Nadu',
    rating: 4.8,
    totalOrders: 1250,
    established: '2015',
    specialties: ['Red Bricks', 'Fly Ash Bricks', 'Hollow Bricks']
  },
  {
    id: 2,
    name: 'Quality Sand Suppliers',
    location: 'Mumbai, Maharashtra',
    rating: 4.6,
    totalOrders: 890,
    established: '2018',
    specialties: ['River Sand', 'M-Sand', 'Plaster Sand']
  },
  {
    id: 3,
    name: 'Timber Works',
    location: 'Bangalore, Karnataka',
    rating: 4.7,
    totalOrders: 650,
    established: '2012',
    specialties: ['Teak Wood', 'Pine Wood', 'Plywood']
  }
]

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Red Bricks (1000 pieces)',
    price: 4500,
    originalPrice: 5000,
    rating: 4.8,
    reviews: 234,
    image: 'https://via.placeholder.com/200x200?text=Red+Bricks',
    chamber: 'Premium Brick Chamber',
    chamberId: 1,
    stock: 15000,
    quality: 'Grade A',
    discount: 10,
    unit: 'per 1000 pieces'
  },
  {
    id: 2,
    name: 'River Sand (1 Ton)',
    price: 1200,
    originalPrice: 1400,
    rating: 4.6,
    reviews: 189,
    image: 'https://via.placeholder.com/200x200?text=River+Sand',
    chamber: 'Quality Sand Suppliers',
    chamberId: 2,
    stock: 500,
    quality: 'Premium',
    discount: 14,
    unit: 'per ton'
  },
  {
    id: 3,
    name: 'Teak Wood Planks (100 sq ft)',
    price: 8500,
    originalPrice: 9500,
    rating: 4.7,
    reviews: 156,
    image: 'https://via.placeholder.com/200x200?text=Teak+Wood',
    chamber: 'Timber Works',
    chamberId: 3,
    stock: 200,
    quality: 'Grade A+',
    discount: 11,
    unit: 'per 100 sq ft'
  },
  {
    id: 4,
    name: 'Fly Ash Bricks (500 pieces)',
    price: 2200,
    originalPrice: 2500,
    rating: 4.5,
    reviews: 98,
    image: 'https://via.placeholder.com/200x200?text=Fly+Ash+Bricks',
    chamber: 'Premium Brick Chamber',
    chamberId: 1,
    stock: 8000,
    quality: 'Grade A',
    discount: 12,
    unit: 'per 500 pieces'
  }
]

const trendingSearches = [
  'Red Bricks', 'River Sand', 'Teak Wood', 'Cement', 'Steel Rods', 'Floor Tiles'
]

export default function Marketplace() {
  const { user, logout } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">ROSHAN TRADERS</h1>
            </div>

            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for bricks, sand, wood, cement..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                  <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  Cart ({cart.length})
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">Hi, {user?.name}</span>
                <button
                  onClick={logout}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Trending Searches</h3>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Chambers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chambers.map((chamber) => (
              <div key={chamber.id} className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{chamber.name}</h4>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium">{chamber.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{chamber.location}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {chamber.specialties.map((specialty, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{chamber.totalOrders} orders</span>
                  <span>Est. {chamber.established}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`p-4 rounded-lg border-2 text-center hover:shadow-md transition-all ${
                  selectedCategory === category.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-gray-700">{category.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Construction Materials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {product.quality}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{product.chamber}</p>
                  
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Stock:</span>
                      <span className={`font-medium ${product.stock > 1000 ? 'text-green-600' : product.stock > 100 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {product.stock.toLocaleString()} {product.unit}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold text-gray-900">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                      <div className="text-xs text-gray-500">{product.unit}</div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {cart.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border p-4 max-w-sm">
            <h4 className="font-semibold text-gray-900 mb-2">Cart ({cart.length})</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="truncate">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <span>₹{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t">
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>₹{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</span>
              </div>
              <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
