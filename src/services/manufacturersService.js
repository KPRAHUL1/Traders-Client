import { manufacturers } from '../modules/superadmin/pages/manufacturers.mock.js';

export function getAllManufacturers() {
  return Promise.resolve(manufacturers);
}

export function getManufacturerById(id) {
  return Promise.resolve(manufacturers.find(m => m.id === id));
}

let listeners = [];
export function subscribeToManufacturerUpdates(cb) {
  listeners.push(cb);
  return () => { listeners = listeners.filter(fn => fn !== cb); };
}
export function simulateManufacturerUpdate(updated) {
  const idx = manufacturers.findIndex(m => m.id === updated.id);
  if (idx !== -1) {
    manufacturers[idx] = { ...manufacturers[idx], ...updated };
    listeners.forEach(fn => fn(manufacturers[idx]));
  }
}
