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
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-wide text-2xl text-blue-600">MarketPlace + IndiaMART</div>
          <nav className="text-sm text-gray-600 flex items-center gap-4">
            <Link to="/login/regular" className="hover:underline bg-blue-50 px-3 py-1 rounded">Regular User</Link>
            <Link to="/role-selection" className="hover:underline bg-gray-50 px-3 py-1 rounded">Business User</Link>
            <Link to="/admin/login" className="hover:underline">Admin Login</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Centralized Construction Materials Trading
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Trade bricks, sand, wood, and construction materials. Connect chambers, agents, and traders in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/login/regular"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Start Shopping
                </Link>
                <Link
                  to="/role-selection"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Business Portal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* User Types Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Experience</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Regular Users */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular Users</h3>
                  <p className="text-gray-600 mb-6">
                    Browse construction materials from multiple chambers. 
                    No role selection needed - just browse, order, and get materials delivered!
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 mb-6">
                    <li>• Browse bricks, sand, wood, and construction materials</li>
                    <li>• Compare quality ratings and reviews</li>
                    <li>• Check real-time stock availability</li>
                    <li>• Direct ordering with chamber owners</li>
                  </ul>
                  <Link
                    to="/login/regular"
                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Start Shopping Now
                  </Link>
                </div>
              </div>

              {/* Business Users */}
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-300 transition-colors">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Users</h3>
                  <p className="text-gray-600 mb-6">
                    Access role-specific dashboards for agents, chamber owners, and traders. 
                    Manage construction materials trading operations efficiently.
                  </p>
                  <ul className="text-left text-gray-600 space-y-2 mb-6">
                    <li>• Chamber management and inventory control</li>
                    <li>• Agent order processing and tracking</li>
                    <li>• Trader network and material sourcing</li>
                    <li>• Super admin oversight and telecalling</li>
                  </ul>
                  <Link
                    to="/role-selection"
                    className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Choose Your Role
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Roles Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Business Roles Available</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {roles.map((role) => (
                <div key={role.key} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4 text-center">{role.icon}</div>
                  <h3 className="text-xl font-semibold text-center mb-2">{role.title}</h3>
                  <p className="text-gray-600 text-center text-sm mb-4">{role.description}</p>
                  <Link
                    to="/role-selection"
                    className="block w-full text-center bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Platform?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
                <p className="text-gray-600">Mobile number-based OTP verification for secure access</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Quick page loads and persistent sessions on refresh</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Role-Based Access</h3>
                <p className="text-gray-600">Tailored experience based on your business needs</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">MarketPlace + IndiaMART</h3>
            <p className="text-gray-400 mb-6">Your integrated solution for shopping and business</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 All rights reserved</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


