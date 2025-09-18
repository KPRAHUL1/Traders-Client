export default function Card({ title, actions, children }) {
  return (
    <div className="bg-white rounded-lg shadow border border-gray-100">
      {(title || actions) && (
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          {title && <h3 className="text-sm font-semibold text-gray-900">{title}</h3>}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}


