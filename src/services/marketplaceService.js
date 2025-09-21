// Mock service for marketplace module
export function getMarketplaceProducts() {
  return Promise.resolve([
    { id: 1, name: 'Cement', price: 320, stock: 100 },
    { id: 2, name: 'Steel Rods', price: 500, stock: 50 },
    { id: 3, name: 'Bricks', price: 5, stock: 1000 },
  ]);
}
