// Mock service for contractor module
export function getContractorDashboardData() {
  return Promise.resolve({
    stats: [
      { id: 1, label: 'Projects', value: 8 },
      { id: 2, label: 'Orders', value: 22 },
      { id: 3, label: 'Pending Payments', value: '$1,500' },
    ],
    projects: [
      { id: 301, name: 'Mall Construction', status: 'active' },
      { id: 302, name: 'Bridge Build', status: 'completed' },
    ],
  });
}
