import { useState } from 'react';
import CallModal from '../../components/shared/CallModal.jsx';

export default function CallUserOnPurchase({ user }) {
  const [open, setOpen] = useState(false);

  const handleCall = () => {
    setOpen(true);
    setTimeout(() => setOpen(false), 3000);
  };

  return (
    <div>
      <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleCall}>
        Call User
      </button>
      <CallModal open={open} user={user} onClose={() => setOpen(false)} />
    </div>
  );
}
