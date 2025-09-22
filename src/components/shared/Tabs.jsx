import { useState } from 'react';

export default function Tabs({ tabs, initial, onTabChange }) {
  const [active, setActive] = useState(initial || tabs[0].key);
  const handleTab = (key) => {
    setActive(key);
    onTabChange && onTabChange(key);
  };
  return (
    <div>
      <div className="flex border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`px-4 py-2 -mb-px border-b-2 font-medium transition-colors ${active === tab.key ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-blue-600'}`}
            onClick={() => handleTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find(tab => tab.key === active)?.content}</div>
    </div>
  );
}
