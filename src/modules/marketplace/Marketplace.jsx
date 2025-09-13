import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.js'

const categories = [
  { id: 1, name: 'Electronics', icon: '📱' },
  { id: 2, name: 'Fashion', icon: '👕' },
  { id: 3, name: 'Home & Garden', icon: '🏠' },
  { id: 4, name: 'Automotive', icon: '🚗' },
  { id: 5, name: 'Sports', icon: '⚽' },
  { id: 6, name: 'Books', icon: '📚' },
]

const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 2999,
    originalPrice: 3999,
    rating: 4.5,
    reviews: 1234,
    image: 'https://via.placeholder.com/200x200?text=Headphones',
    seller: 'TechStore India',
    isPrime: true,
    discount: 25
  },
  {
    id: 2,
    name: 'Cotton T-Shirt Pack of 3',
    price: 899,
    originalPrice: 1299,
    rating: 4.2,
    reviews: 567,
    image: 'https://via.placeholder.com/200x200?text=T-Shirt',
    seller: 'Fashion Hub',
    isPrime: false,
    discount: 31
  },
  {
    id: 3,
    name: 'Smart Watch Series 7',
    price: 15999,
    originalPrice: 19999,
    rating: 4.7,
    reviews: 2341,
    image: 'https://via.placeholder.com/200x200?text=Smart+Watch',
    seller: 'ElectroMart',
    isPrime: true,
    discount: 20
  },
  {
    id: 4,
    name: 'Home Decor Set',
    price: 2499,
    originalPrice: 3499,
    rating: 4.3,
    reviews: 789,
    image: 'https://via.placeholder.com/200x200?text=Home+Decor',
    seller: 'Decor Plus',
    isPrime: false,
    discount: 29
  }
]

const trendingSearches = [
  'iPhone 15', 'Samsung Galaxy', 'Laptop', 'Shoes', 'Books', 'Kitchen Appliances'
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">MarketPlace</h1>
              <span className="ml-2 text-sm text-gray-500">+ IndiaMART</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more..."
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

            {/* User Menu */}
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
        {/* Trending Searches */}
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

        {/* Categories */}
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

        {/* Featured Products */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured Products</h3>
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
                  {product.isPrime && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      Prime
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">{product.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{product.seller}</p>
                  <div className="flex items-center mb-2">
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
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Sidebar */}
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
