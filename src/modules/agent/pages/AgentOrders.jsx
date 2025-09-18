import { useState } from 'react'
import SectionHeader from '../../../components/shared/SectionHeader.jsx'
import Card from '../../../components/shared/Card.jsx'
import Table from '../../../components/shared/Table.jsx'
import Badge from '../../../components/shared/Badge.jsx'
import Modal from '../../../components/shared/Modal.jsx'

const mockOrders = [
  {
    id: 'ORD-001',
    product: 'Premium Red Bricks (1000 pieces)',
    chamber: 'Premium Brick Chamber',
    quantity: 2000,
    price: 9000,
    status: 'pending',
    orderDate: '2024-01-15',
    expectedDelivery: '2024-01-20',
    chamberContact: '+91 9876543210'
  },
  {
    id: 'ORD-002',
    product: 'River Sand (2 Tons)',
    chamber: 'Quality Sand Suppliers',
    quantity: 2,
    price: 2400,
    status: 'confirmed',
    orderDate: '2024-01-14',
    expectedDelivery: '2024-01-18',
    chamberContact: '+91 9876543211'
  },
  {
    id: 'ORD-003',
    product: 'Teak Wood Planks (200 sq ft)',
    chamber: 'Timber Works',
    quantity: 200,
    price: 17000,
    status: 'shipped',
    orderDate: '2024-01-12',
    expectedDelivery: '2024-01-16',
    chamberContact: '+91 9876543212'
  }
]

const statusColor = (status) => (
  status === 'pending' ? 'yellow' :
  status === 'confirmed' ? 'blue' :
  status === 'shipped' ? 'green' :
  status === 'delivered' ? 'gray' : 'red'
)

export default function AgentOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [showCallModal, setShowCallModal] = useState(false)

  const handleCallSuperAdmin = () => {
    setShowCallModal(true)
    // In a real app, this would initiate a call
    setTimeout(() => {
      setShowCallModal(false)
      alert('Calling Super Admin...')
    }, 2000)
  }

  const handleCallChamber = (contact) => {
    // In a real app, this would initiate a call to the chamber
    alert(`Calling Chamber: ${contact}`)
  }

  return (
    <div className="p-6">
      <SectionHeader
        title="My Orders"
        right={(
          <button
            onClick={handleCallSuperAdmin}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Super Admin
          </button>
        )}
      />

      <Card>
        <Table
          columns={[
            { key: 'id', title: 'Order ID' },
            { key: 'product', title: 'Product' },
            { key: 'chamber', title: 'Chamber' },
            { key: 'quantity', title: 'Quantity' },
            { key: 'price', title: 'Price', render: (v) => `₹${v.toLocaleString()}` },
            { key: 'status', title: 'Status', render: (v) => <Badge color={statusColor(v)}>{v.charAt(0).toUpperCase() + v.slice(1)}</Badge> },
            { key: 'actions', title: 'Actions', render: (_, order) => (
              <div className="flex space-x-2">
                <button onClick={() => setSelectedOrder(order)} className="text-blue-600 hover:text-blue-900">View Details</button>
                <button onClick={() => handleCallChamber(order.chamberContact)} className="text-green-600 hover:text-green-900">Call Chamber</button>
              </div>
            ) }
          ]}
          rows={mockOrders}
          rowKey="id"
        />
      </Card>

      {/* Order Details Modal */}
      <Modal
        title="Order Details"
        open={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        footer={selectedOrder && (
          <>
            <button
              onClick={() => handleCallChamber(selectedOrder.chamberContact)}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Call Chamber
            </button>
            <button
              onClick={() => setSelectedOrder(null)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </>
        )}
      >
        {selectedOrder && (
          <div className="space-y-3">
            <div><span className="font-medium">Order ID:</span> {selectedOrder.id}</div>
            <div><span className="font-medium">Product:</span> {selectedOrder.product}</div>
            <div><span className="font-medium">Chamber:</span> {selectedOrder.chamber}</div>
            <div><span className="font-medium">Quantity:</span> {selectedOrder.quantity}</div>
            <div><span className="font-medium">Price:</span> ₹{selectedOrder.price.toLocaleString()}</div>
            <div>
              <span className="font-medium">Status:</span>
              <span className="ml-2"><Badge color={statusColor(selectedOrder.status)}>{selectedOrder.status.charAt(0).toUpperCase() + selectedOrder.status.slice(1)}</Badge></span>
            </div>
            <div><span className="font-medium">Order Date:</span> {selectedOrder.orderDate}</div>
            <div><span className="font-medium">Expected Delivery:</span> {selectedOrder.expectedDelivery}</div>
            <div><span className="font-medium">Chamber Contact:</span> {selectedOrder.chamberContact}</div>
          </div>
        )}
      </Modal>

      {/* Call Modal */}
      <Modal open={showCallModal} onClose={() => setShowCallModal(false)}>
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mt-2">Calling Super Admin</h3>
          <p className="text-sm text-gray-500 mt-1">Connecting you to our support team...</p>
        </div>
      </Modal>
    </div>
  )
}