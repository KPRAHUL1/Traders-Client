import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { AuthLayout } from '../layouts/AuthLayout'

const SuperAdminDashboard = lazy(() => import('../modules/superadmin/pages/SuperAdminDashboard'))
const ManageUsers = lazy(() => import('../modules/superadmin/pages/ManageUsers'))
const ManageProducts = lazy(() => import('../modules/superadmin/pages/ManageProducts'))

const AgentDashboard = lazy(() => import('../modules/agent/pages/AgentDashboard'))
const AgentOrders = lazy(() => import('../modules/agent/pages/AgentOrders'))
const AgentPayments = lazy(() => import('../modules/agent/pages/AgentPayments'))

const Login = lazy(() => import('../modules/auth/Login'))

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["superadmin", "agent", "contractor", "manufacturer"]} />}> 
        <Route element={<DashboardLayout />}>
          {/* Superadmin */}
          <Route path="/superadmin" element={<Navigate to="/superadmin/dashboard" replace />} />
          <Route path="/superadmin/dashboard" element={<SuperAdminDashboard />} />
          <Route path="/superadmin/users" element={<ManageUsers />} />
          <Route path="/superadmin/products" element={<ManageProducts />} />

          {/* Agent */}
          <Route path="/agent" element={<Navigate to="/agent/dashboard" replace />} />
          <Route path="/agent/dashboard" element={<AgentDashboard />} />
          <Route path="/agent/orders" element={<AgentOrders />} />
          <Route path="/agent/payments" element={<AgentPayments />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}




