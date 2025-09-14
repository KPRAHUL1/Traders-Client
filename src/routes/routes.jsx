import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'
import DashboardLayout from '../layouts/DashboardLayout.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx'

const SuperAdminDashboard = lazy(() => import('../modules/superadmin/pages/SuperAdminDashboard.jsx'))
const ManageUsers = lazy(() => import('../modules/superadmin/pages/ManageUsers.jsx'))
const ManageProducts = lazy(() => import('../modules/superadmin/pages/ManageProducts.jsx'))

const AgentDashboard = lazy(() => import('../modules/agent/pages/AgentDashboard.jsx'))
const AgentOrders = lazy(() => import('../modules/agent/pages/AgentOrders.jsx'))
const AgentPayments = lazy(() => import('../modules/agent/pages/AgentPayments.jsx'));
const AgentProducts = lazy(() => import('../modules/agent/pages/AgentProducts.jsx'));

const Login = lazy(() => import('../modules/auth/UserLogin.jsx'))
const RegularUserLogin = lazy(() => import('../modules/auth/RegularUserLogin.jsx'))
const RoleBasedLogin = lazy(() => import('../modules/auth/RoleBasedLogin.jsx'))
const AdminLogin = lazy(() => import('../modules/auth/AdminLogin.jsx'))
const Landing = lazy(() => import('../modules/public/Landing.jsx'))
const RoleSelection = lazy(() => import('../components/RoleSelection.jsx'))
const Marketplace = lazy(() => import('../modules/marketplace/Marketplace.jsx'))
const ContractorDashboard = lazy(() => import('../modules/contractor/pages/ContractorDashboard.jsx'))
const ManufacturerDashboard = lazy(() => import('../modules/manufacturer/pages/ManufacturerDashboard.jsx'))

export function AppRoutes() {
  return (
    <Suspense fallback={<div className="min-h-screen grid place-items-center text-gray-600">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        {/* Role Selection */}
        <Route path="/role-selection" element={<RoleSelection />} />
        
        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login/:role" element={<Login />} />
          <Route path="/login/regular" element={<RegularUserLogin />} />
          <Route path="/login/role-based/:role" element={<RoleBasedLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* Regular User Routes */}
        <Route element={<ProtectedRoute allowedRoles={["regular"]} />}>
          <Route path="/marketplace" element={<Marketplace />} />
        </Route>

        {/* Role-based User Routes */}
        <Route element={<ProtectedRoute allowedRoles={["superadmin", "agent", "contractor", "manufacturer", "chamber", "trader"]} />}> 
          <Route element={<DashboardLayout />}>
            <Route path="/superadmin" element={<Navigate to="/superadmin/dashboard" replace />} />
            <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/superadmin/users" element={<ManageUsers />} />
            <Route path="/superadmin/products" element={<ManageProducts />} />

            <Route path="/agent" element={<Navigate to="/agent/dashboard" replace />} />
            <Route path="/agent/dashboard" element={<AgentDashboard />} />
            <Route path="/agent/products" element={<AgentProducts />} />
            <Route path="/agent/orders" element={<AgentOrders />} />
            <Route path="/agent/payments" element={<AgentPayments />} />

            {/* Contractor */}
            <Route path="/contractor" element={<Navigate to="/contractor/dashboard" replace />} />
            <Route path="/contractor/dashboard" element={<ContractorDashboard />} />

            {/* Manufacturer */}
            <Route path="/manufacturer" element={<Navigate to="/manufacturer/dashboard" replace />} />
            <Route path="/manufacturer/dashboard" element={<ManufacturerDashboard />} />

            {/* Chamber */}
            <Route path="/chamber" element={<Navigate to="/chamber/dashboard" replace />} />
            <Route path="/chamber/dashboard" element={<ContractorDashboard />} />

            {/* Trader */}
            <Route path="/trader" element={<Navigate to="/trader/dashboard" replace />} />
            <Route path="/trader/dashboard" element={<ContractorDashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes


