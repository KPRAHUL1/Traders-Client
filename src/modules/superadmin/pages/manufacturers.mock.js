// Mock data for manufacturers and their details
export const manufacturers = [
  {
    id: 'm1',
    name: 'ABC Bricks Factory',
    location: 'Chennai',
    contact: '+91 9876543210',
    companyType: 'manufacturer',
    isAgent: false,
    totalTransport: 12,
    orders: [
      { id: 'o1', product: 'Bricks', quantity: 10000, status: 'delivered', date: '2025-09-20' },
      { id: 'o2', product: 'Cement', quantity: 500, status: 'pending', date: '2025-09-21' }
    ],
    agents: [
      { id: 'a1', name: 'Agent One', contact: '+91 9000000001' }
    ]
  },
  {
    id: 'm2',
    name: 'XYZ Cement Works',
    location: 'Hyderabad',
    contact: '+91 9876543222',
    companyType: 'manufacturer',
    isAgent: true,
    totalTransport: 8,
    orders: [
      { id: 'o3', product: 'Cement', quantity: 2000, status: 'shipped', date: '2025-09-19' }
    ],
    agents: []
  }
]
