import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.js'
import { LayoutDashboard, Package, ShoppingCart, CreditCard, Users, Shield, ChevronLeftSquare, ChevronRightSquare, Sparkles } from 'lucide-react'

const roleToMenus = {
  superadmin: [
    { to: '/superadmin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/superadmin/users', label: 'Manage Users', icon: Users },
    { to: '/superadmin/products', label: 'Manage Products', icon: Package },
    { to: '/superadmin/manufacturers', label: 'Manufacturers', icon: Package },
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
    <aside className={`${
      collapsed && variant === 'desktop' ? 'w-20' : 'w-72'
    } ${
      variant === 'desktop' ? 'h-screen sticky top-0' : 'h-full'
    } relative flex flex-col transition-all duration-300 ease-out`}>
      
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-50"></div>
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative flex flex-col h-full z-10">

        <div className={`${
          collapsed ? 'px-4 justify-center' : 'px-6'
        } h-16 flex items-center gap-3 border-b border-white/10 bg-white/5 backdrop-blur-sm`}>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-60"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg tracking-tight">Portal</span>
                <span className="text-xs text-slate-400 font-medium">{user?.role?.toUpperCase()}</span>
              </div>
            )}
          </div>
          
          {variant === 'desktop' && (
            <button
              onClick={onToggleCollapse}
              className={`${
                collapsed ? 'ml-0' : 'ml-auto'
              } group flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:scale-105`}
            >
              {collapsed ? (
                <ChevronRightSquare className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
              ) : (
                <ChevronLeftSquare className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
              )}
            </button>
          )}
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menus.map((item,) => {
            const Icon = item.icon
            const active = location.pathname === item.to || location.pathname.startsWith(item.to)
            
            return (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onNavigate}
                className={({ isActive }) => `
                  group relative flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:-translate-y-0.5
                  ${isActive || active 
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 text-white shadow-lg shadow-blue-500/10' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                  }
                `}
              >
                {(active) && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-r-full"></div>
                )}
                
                <div className={`relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
                  active 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/20' 
                    : 'bg-white/5 group-hover:bg-white/10'
                }`}>
                  <Icon className={`w-4 h-4 transition-all duration-200 ${
                    active ? 'text-white' : 'text-slate-400 group-hover:text-white'
                  }`} />
                  
                  <Sparkles className={`absolute top-0 right-0 w-2 h-2 text-yellow-400 transition-all duration-300 ${
                    active ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                  }`} />
                </div>
                
                {!collapsed && (
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className={`font-medium text-sm truncate transition-colors duration-200 ${
                      active ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                    {active && (
                      <div className="h-px bg-gradient-to-r from-blue-400 to-purple-400 mt-1 transform origin-left animate-pulse"></div>
                    )}
                  </div>
                )}
                
                {!collapsed && active && (
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                )}
              </NavLink>
            )
          })}
        </nav>
      
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-20 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-25 animation-delay-2000"></div>
      </div>
    </aside>
  )
}