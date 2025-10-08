import { useState } from 'react'
import { useAuth } from '../../../hooks/useAuth.js'

const mockOrders = [
  {
    id: 'ORD-001',
    agent: 'John Doe',
    agentContact: '+91 9876543210',
    product: 'Premium Red Bricks (1000 pieces)',
    chamber: 'Premium Brick Chamber',
    quantity: 2000,
    price: 9000,
    status: 'pending',
    orderDate: '2024-01-15',
    expectedDelivery: '2024-01-20',
    priority: 'high'
  },
  {
    id: 'ORD-002',
    agent: 'Jane Smith',
    agentContact: '+91 9876543211',
    product: 'River Sand (2 Tons)',
    chamber: 'Quality Sand Suppliers',
    quantity: 2,
    price: 2400,
    status: 'confirmed',
    orderDate: '2024-01-14',
    expectedDelivery: '2024-01-18',
    priority: 'medium'
  },
  {
    id: 'ORD-003',
    agent: 'Mike Johnson',
    agentContact: '+91 9876543212',
    product: 'Teak Wood Planks (200 sq ft)',
    chamber: 'Timber Works',
    quantity: 200,
    price: 17000,
    status: 'shipped',
    orderDate: '2024-01-12',
    expectedDelivery: '2024-01-16',
    priority: 'low'
  },
  {
    id: 'ORD-004',
    agent: 'Sarah Wilson',
    agentContact: '+91 9876543213',
    product: 'Fly Ash Bricks (500 pieces)',
    chamber: 'Premium Brick Chamber',
    quantity: 1000,
    price: 2200,
    status: 'delivered',
    orderDate: '2024-01-10',
    expectedDelivery: '2024-01-14',
    priority: 'medium'
  }
]

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  confirmed: 'bg-blue-100 text-blue-800',
  shipped: 'bg-green-100 text-green-800',
  delivered: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800'
}

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
}

export default function SuperAdminDashboard() {
  const { logout } = useAuth()
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showCallModal, setShowCallModal] = useState(false)
  const [callTarget, setCallTarget] = useState('')

  const handleCallAgent = (agentContact, agentName) => {
    setCallTarget(agentName)
    setShowCallModal(true)
    setTimeout(() => {
      setShowCallModal(false)
      alert(`Calling ${agentName}...`)
    }, 2000)
  }

  const totalOrders = mockOrders.length
  const pendingOrders = mockOrders.filter(order => order.status === 'pending').length
  const totalRevenue = mockOrders.reduce((sum, order) => sum + order.price, 0)

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
       <div className="flex items-center gap-2">
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-extrabold text-3xl px-4 py-2 rounded-xl shadow-md tracking-tight">
    Super<span className="text-yellow-300">Admin</span>
  </div>
  <span className="text-gray-500 text-sm font-medium ml-1">Dashboard</span>
</div>
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-blue-600">{totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Orders</h3>
          <p className="text-3xl font-bold text-yellow-600">{pendingOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-600">₹{totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Agents</h3>
          <p className="text-3xl font-bold text-purple-600">24</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">All Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chamber
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.agent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.chamber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ₹{order.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[order.status]}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${priorityColors[order.priority]}`}>
                      {order.priority.charAt(0).toUpperCase() + order.priority.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </button>
                      <button
                        onClick={() => handleCallAgent(order.agentContact, order.agent)}
                        className="text-green-600 hover:text-green-900"
                      >
                        Call Agent
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedOrder && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Order Details</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <span className="font-medium">Order ID:</span> {selectedOrder.id}
                </div>
                <div>
                  <span className="font-medium">Agent:</span> {selectedOrder.agent}
                </div>
                <div>
                  <span className="font-medium">Agent Contact:</span> {selectedOrder.agentContact}
                </div>
                <div>
                  <span className="font-medium">Product:</span> {selectedOrder.product}
                </div>
                <div>
                  <span className="font-medium">Chamber:</span> {selectedOrder.chamber}
                </div>
                <div>
                  <span className="font-medium">Quantity:</span> {selectedOrder.quantity}
                </div>
                <div>
                  <span className="font-medium">Price:</span> ₹{selectedOrder.price.toLocaleString()}
                </div>
                <div>
                  <span className="font-medium">Status:</span> 
                  <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[selectedOrder.status]}`}>
                    {selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Priority:</span> 
                  <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${priorityColors[selectedOrder.priority]}`}>
                    {selectedOrder.priority.charAt(0).toUpperCase() + selectedOrder.priority.slice(1)}
                  </span>
                </div>
                <div>
                  <span className="font-medium">Order Date:</span> {selectedOrder.orderDate}
                </div>
                <div>
                  <span className="font-medium">Expected Delivery:</span> {selectedOrder.expectedDelivery}
                </div>
              </div>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={() => handleCallAgent(selectedOrder.agentContact, selectedOrder.agent)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Call Agent
                </button>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCallModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Calling {callTarget}</h3>
              <p className="text-sm text-gray-500 mt-1">Connecting to agent...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


