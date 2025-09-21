import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth.js'

export default function AdminLogin() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!username || !password) return
    login({
      id: `superadmin_${Date.now()}`,
      name: username,
      role: 'superadmin',
      userType: 'role-based',
    })
    navigate(from || '/superadmin/dashboard', { replace: true })
  }

  return (
    <div className="w-full max-w-sm bg-white rounded-md shadow p-6 space-y-4">
      <h1 className="text-xl font-semibold text-center">Admin Sign in</h1>
      <div className="text-xs text-gray-500 text-center">Super Admin authentication via email/username</div>
      <form onSubmit={onSubmit} className="space-y-3">
        <label className="block text-sm">
          <span className="text-gray-700">Email or Username</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </label>
        <label className="block text-sm">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </label>
        <button type="submit" className="w-full px-3 py-2 rounded bg-gray-900 text-white">Sign in</button>
      </form>
    </div>
  )
}


