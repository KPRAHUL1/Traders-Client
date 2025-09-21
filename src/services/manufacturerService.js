// Mock service for manufacturer module
import { manufacturerStats, productCatalog, recentOrders } from '../modules/manufacturer/pages/manufacturer.mock.js';

export function getManufacturerStats() {
  return Promise.resolve(manufacturerStats);
}

export function getProductCatalog() {
  return Promise.resolve(productCatalog);
}

export function getRecentOrders() {
  return Promise.resolve(recentOrders);
}
