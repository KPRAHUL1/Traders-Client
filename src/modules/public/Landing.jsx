import { Link } from 'react-router-dom'

const roles = [
  {
    key: 'agent',
    title: 'Agents',
    description: 'Browse and order construction materials from chambers.',
    icon: '👨‍💼',
  },
  {
    key: 'chamber',
    title: 'Chamber Owners',
    description: 'Manage brick manufacturing and supply operations.',
    icon: '🏭',
  },
  {
    key: 'trader',
    title: 'Traders',
    description: 'Trade construction materials across multiple chambers.',
    icon: '📦',
  },
  {
    key: 'contractor',
    title: 'Contractors',
    description: 'Access assigned projects and material requirements.',
    icon: '🔨',
  },
  {
    key: 'truck-owner',
    title: 'Truck Owners',
    description: 'Manage transportation and logistics for construction materials.',
    icon: '🚛',
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Contractor',
    text: 'This platform simplified our material sourcing. We save 2-3 hours daily!',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Chamber Owner',
    text: 'Managing inventory and orders has never been easier. Highly recommend!',
    rating: 5
  },
  {
    name: 'Amit Patel',
    role: 'Regular User',
    text: 'Quick delivery and transparent pricing. My go-to for construction materials.',
    rating: 5
  }
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-3xl px-4 py-1 rounded-lg tracking-widest shadow-md">
              ROSHAN
            </div>
            <span className="text-gray-800 font-semibold text-2xl tracking-tight">
              TRADERS
            </span>
          </div>
          <nav className="text-sm text-gray-600 flex items-center gap-4">
            <Link to="/login/regular" className="hover:underline bg-blue-50 px-3 py-1 rounded hover:bg-blue-100 transition-colors">Regular User</Link>
            <Link to="/role-selection" className="hover:underline bg-gray-50 px-3 py-1 rounded hover:bg-gray-100 transition-colors">Business User</Link>
            <Link to="/admin/login" className="hover:underline hover:text-blue-600 transition-colors">Admin Login</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center">
              <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-pulse">
                🚀 Trusted by 1000+ Businesses
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Centralized Construction Materials Trading
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Trade bricks, sand, wood, and construction materials. Connect chambers, agents, and traders in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/login/regular"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
                >
                  Start Shopping →
                </Link>
                <Link
                  to="/role-selection"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all hover:shadow-lg"
                >
                  Business Portal
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">
                ✓ No credit card required  ✓ Free to browse  ✓ Instant access
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Experience</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Whether you're a buyer or a business, we've got the perfect solution for you
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular Users</h3>
                  <p className="text-gray-600 mb-6">
                    Browse construction materials from multiple chambers. 
                    No role selection needed - just browse, order, and get materials delivered!
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 mb-6">
                    <li>✓ Browse bricks, sand, wood, and construction materials</li>
                    <li>✓ Compare quality ratings and reviews</li>
                    <li>✓ Check real-time stock availability</li>
                    <li>✓ Direct ordering with chamber owners</li>
                  </ul>
                  <Link
                    to="/login/regular"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-md w-full"
                  >
                    Start Shopping Now →
                  </Link>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-all hover:shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    For Professionals
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Users</h3>
                  <p className="text-gray-600 mb-6">
                    Access role-specific dashboards for agents, chamber owners, and traders. 
                    Manage construction materials trading operations efficiently.
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 mb-6">
                    <li>✓ Chamber management and inventory control</li>
                    <li>✓ Agent order processing and tracking</li>
                    <li>✓ Trader network and material sourcing</li>
                    <li>✓ Super admin oversight and telecalling</li>
                  </ul>
                  <Link
                    to="/role-selection"
                    className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-md w-full"
                  >
                    Choose Your Role →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Roles Available</h2>
              <p className="text-gray-600">Find the perfect role that matches your business needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.key} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                  <div className="text-4xl mb-4 text-center">{role.icon}</div>
                  <h3 className="text-xl font-semibold text-center mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">{role.description}</p>
                  <Link
                    to="/role-selection"
                    className="block w-full text-center bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 py-2 rounded hover:from-blue-100 hover:to-indigo-100 transition-all font-medium"
                  >
                    Get Started →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
              <p className="text-gray-600">Everything you need for seamless construction material trading</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
                <p className="text-gray-600">Mobile number-based OTP verification for secure access</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Quick page loads and persistent sessions on refresh</p>
              </div>
              <div className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
                <p className="text-gray-600">Tailored experience based on your business needs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-gray-600">Join thousands of satisfied users across India</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our platform today and experience seamless construction material trading
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/login/regular"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg text-lg"
                >
                  Start Shopping Now
                </Link>
                <Link
                  to="/role-selection"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all hover:shadow-lg text-lg"
                >
                  Explore Business Options
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/login/regular" className="hover:text-white transition-colors">Regular Login</Link></li>
                <li><Link to="/role-selection" className="hover:text-white transition-colors">Business Login</Link></li>
                <li><Link to="/admin/login" className="hover:text-white transition-colors">Admin Login</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">For Business</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Become an Agent</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chamber Owners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Traders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">📞 +91 1234567890</a></li>
                <li><a href="#" className="hover:text-white transition-colors">✉️ info@roshantraders.com</a></li>
                <li className="flex gap-3 mt-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <h3 className="text-2xl font-bold mb-2">ROSHAN TRADERS</h3>
            <p className="text-gray-400 mb-4">Your integrated solution for construction material trading</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>© 2024 All rights reserved</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}