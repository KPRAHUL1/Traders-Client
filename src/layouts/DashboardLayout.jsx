import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  const toggleSidebar = () => setIsSidebarOpen((v) => !v)

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden md:block">
        <Sidebar variant="desktop" onNavigate={closeSidebar} />
      </div>

      {/* Mobile sidebar overlay */}
      {isSidebarOpen ? (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={closeSidebar} />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85%] bg-white shadow-lg">
            <Sidebar variant="mobile" onNavigate={closeSidebar} />
          </div>
        </div>
      ) : null}

      <div className="flex-1 flex flex-col">
        <Navbar onMenuClick={toggleSidebar} />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}


