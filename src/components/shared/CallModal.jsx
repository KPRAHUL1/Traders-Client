import React from 'react';

export default function CallModal({ open, user, onClose }) {
  if (!open || !user) return null;
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-lg">Calling {user.name}</div>
            <div className="text-sm text-gray-500">{user.contact}</div>
          </div>
        </div>
        <div className="text-center text-gray-700 mb-4">Connecting to user for purchase support...</div>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-700" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
