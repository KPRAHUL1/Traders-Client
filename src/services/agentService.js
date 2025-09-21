// Mock service for agent module
export function getAgentDashboardData() {
  return Promise.resolve({
    stats: [
      { id: 1, label: 'Total Orders', value: 56 },
      { id: 2, label: 'Active Clients', value: 12 },
      { id: 3, label: 'Commission Earned', value: '$3,200' },
    ],
    orders: [
      { id: 201, product: 'Cement', quantity: 10, status: 'processing' },
      { id: 202, product: 'Steel Rods', quantity: 5, status: 'shipped' },
    ],
  });
}
