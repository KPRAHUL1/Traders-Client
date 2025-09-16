import { useState } from 'react'
import { Menu, LogOut, CircleUserRound } from 'lucide-react'
import { useAuth } from '../hooks/useAuth.js'

export default function Navbar({ onMenuClick }) {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const initials = user?.name ? user.name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase() : ''

  return (
    <header className="h-14 bg-indigo-600 text-white flex items-center justify-between px-4 shadow">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded hover:bg-indigo-500/50">
          <Menu className="w-5 h-5" />
        </button>
        <div className="font-semibold tracking-wide">{user ? user.role.toUpperCase() : 'PORTAL'}</div>
      </div>

      {user ? (
        <div className="relative">
          <button onClick={() => setOpen((v) => !v)} className="inline-flex items-center gap-2 px-2 py-1.5 rounded hover:bg-indigo-500/60">
            <span className="hidden sm:block text-sm text-white/90">{user.name}</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white text-xs ring-1 ring-white/20">
              {initials || <CircleUserRound className="w-4 h-4" />}
            </span>
          </button>
          {open ? (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-md z-50">
              <button onClick={logout} className="w-full flex items-center gap-2 px-3 py-2 text-left text-sm hover:bg-gray-50 text-gray-700">
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  )
}


