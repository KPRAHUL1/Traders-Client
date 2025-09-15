import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import { LayoutDashboard, Package, ShoppingCart, CreditCard, Users, Shield, ChevronLeftSquare, ChevronRightSquare } from 'lucide-react'

const roleToMenus = {
  superadmin: [
    { to: '/superadmin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/superadmin/users', label: 'Manage Users', icon: Users },
    { to: '/superadmin/products', label: 'Manage Products', icon: Package },
  ],
  agent: [
    { to: '/agent/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/agent/products', label: 'Products', icon: Package },
    { to: '/agent/orders', label: 'Orders', icon: ShoppingCart },
    { to: '/agent/payments', label: 'Payment Entry', icon: CreditCard },
  ],
  contractor: [
    { to: '/contractor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ],
  manufacturer: [
    { to: '/manufacturer/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ],
}

export default function Sidebar({ variant = 'desktop', collapsed = false, onToggleCollapse, onNavigate }) {
  const { user } = useAuth()
  const location = useLocation()
  const menus = user ? roleToMenus[user.role] || [] : []

  return (
    <aside className={`${collapsed && variant === 'desktop' ? 'w-16' : 'w-64'} bg-white ${variant === 'desktop' ? 'border-r h-screen sticky top-0' : 'h-full'} flex flex-col transition-[width] duration-200`}>
      <div className={`h-14 border-b flex items-center ${collapsed ? 'px-2 justify-between' : 'px-4'} gap-2 font-semibold`}>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5" />
          {!collapsed && <span>Portal</span>}
        </div>
        {variant === 'desktop' ? (
          <button onClick={onToggleCollapse} className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-100">
            {collapsed ? <ChevronRightSquare className="w-4 h-4" /> : <ChevronLeftSquare className="w-4 h-4" />}
          </button>
        ) : null}
      </div>
      <nav className="p-2 overflow-y-auto">
        {menus.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.to || location.pathname.startsWith(item.to)
          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) => `group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 ${
                isActive || active ? 'bg-gray-50 text-gray-900 font-medium border border-gray-200' : 'text-gray-700'
              }`}
            >
              <Icon className="w-4 h-4 text-gray-500 group-hover:text-gray-700" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}


