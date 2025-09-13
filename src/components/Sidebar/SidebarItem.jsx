export default function SidebarItem({ to, icon: Icon, label, isActive }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded ${isActive ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'}`}>
      {Icon ? <Icon className="w-4 h-4" /> : null}
      <span>{label}</span>
    </div>
  )
}


