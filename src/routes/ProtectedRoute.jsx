import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.js'

export default function ProtectedRoute({ allowedRoles }) {
  const { isAuthenticated, user, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return <div className="min-h-screen grid place-items-center text-gray-600">Loading...</div>
  }

  if (!isAuthenticated) {
    if (allowedRoles.includes('regular')) {
      return <Navigate to="/login/regular" state={{ from: location }} replace />
    } else {
      return <Navigate to="/role-selection" state={{ from: location }} replace />
    }
  }

  if (user && !allowedRoles.includes(user.role)) {
    if (user.userType === 'regular' && !allowedRoles.includes('regular')) {
      return <Navigate to="/role-selection" replace />
    } else if (user.userType === 'role-based' && !allowedRoles.includes(user.role)) {
      return <Navigate to="/role-selection" replace />
    }
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}


