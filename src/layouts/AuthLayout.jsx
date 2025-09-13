import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <Outlet />
    </div>
  )
}


