import { useEffect, useState } from 'react';
import { getAllManufacturers, getManufacturerById, subscribeToManufacturerUpdates } from '../../../services/manufacturersService.js';
import Tabs from '../../../components/shared/Tabs.jsx';

export default function ManageManufacturers() {
  const [manufacturers, setManufacturers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getAllManufacturers().then(setManufacturers);
  }, []);

  useEffect(() => {
    if (!selected) return;
    getManufacturerById(selected).then(setDetails);
    const unsub = subscribeToManufacturerUpdates((updated) => {
      if (updated.id === selected) setDetails(updated);
    });
    return unsub;
  }, [selected]);

  if (!selected) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">All Manufacturers</h2>
        <ul className="divide-y bg-white rounded shadow">
          {manufacturers.map(m => (
            <li key={m.id} className="p-4 hover:bg-gray-50 cursor-pointer" onClick={() => setSelected(m.id)}>
              <div className="font-bold text-lg">{m.name}</div>
              <div className="text-sm text-gray-500">{m.location} &bull; {m.contact}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!details) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <button className="text-blue-600 underline" onClick={() => setSelected(null)}>&larr; Back to list</button>
      <h2 className="text-2xl font-semibold">{details.name}</h2>
      <div className="text-gray-600">{details.location} &bull; {details.contact}</div>
      <div className="text-gray-500 mb-2">Type: {details.companyType} {details.isAgent && <span>(Also an Agent)</span>}</div>
      <Tabs
        tabs={[
          {
            key: 'dashboard',
            label: 'Dashboard',
            content: (
              <div>
                <div>Total Transport: <span className="font-bold">{details.totalTransport}</span></div>
                <div>Agents: {details.agents.length > 0 ? details.agents.map(a => <span key={a.id}>{a.name} ({a.contact}) </span>) : 'None'}</div>
              </div>
            )
          },
          {
            key: 'orders',
            label: 'Orders',
            content: (
              <ul className="divide-y">
                {details.orders.map(o => (
                  <li key={o.id} className="py-2">
                    <div className="font-medium">{o.product} - {o.quantity}</div>
                    <div className="text-xs text-gray-500">{o.status} &bull; {o.date}</div>
                  </li>
                ))}
              </ul>
            )
          },
          {
            key: 'company',
            label: 'Company/Agent Info',
            content: (
              <div>
                <div>Company Type: {details.companyType}</div>
                <div>Is Agent: {details.isAgent ? 'Yes' : 'No'}</div>
                <div>Contact: {details.contact}</div>
                <div>Location: {details.location}</div>
              </div>
            )
          }
        ]}
      />
    </div>
  );
}
