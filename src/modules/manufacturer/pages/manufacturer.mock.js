// Mock data for manufacturer dashboard
export const manufacturerStats = [
  { id: 1, label: 'Total Products', value: 128 },
  { id: 2, label: 'Active Orders', value: 34 },
  { id: 3, label: 'Pending Shipments', value: 12 },
  { id: 4, label: 'Revenue (This Month)', value: '$24,500' },
];

export const productCatalog = [
  { id: 1, name: 'Cement', sku: 'CEM-001', stock: 120, status: 'active' },
  { id: 2, name: 'Steel Rods', sku: 'STL-002', stock: 80, status: 'active' },
  { id: 3, name: 'Bricks', sku: 'BRK-003', stock: 200, status: 'inactive' },
  { id: 4, name: 'Sand', sku: 'SND-004', stock: 50, status: 'active' },
];

export const recentOrders = [
  { id: 101, product: 'Cement', quantity: 20, buyer: 'ABC Constructions', status: 'processing' },
  { id: 102, product: 'Steel Rods', quantity: 10, buyer: 'XYZ Builders', status: 'shipped' },
  { id: 103, product: 'Bricks', quantity: 50, buyer: 'LMN Infra', status: 'pending' },
];

export const menuItems = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'catalog', label: 'Product Catalog' },
  { key: 'orders', label: 'Orders' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'settings', label: 'Settings' },
];
